import Head from "next/head";
import Header from "../components/Header";
import SectionBackgrounded from "../components/SectionBackgrounded";
import FamilyBanner from "../../public/banner.png";
import TitleSection from "../components/TitleSection";
import UserInfo from "../components/UserInfo";
import { Container } from "../styles/home";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import { useEffect } from "react";
import api from "../services/api";
import { GetServerSideProps } from "next";
import useCart from "../hooks/useCart";

interface HomeProps {
  cart: Product[];
}

// eu sei que não faz sentido usar o getServerSideProps para requisitar items de um carrinho,
// já coisas assim normalmente é guardado no navegador da pessoa, porém, estou
// fazendo isso só mostrar bem oque eu sei de next.
export default function Home({ cart }: HomeProps) {
  const { setCart } = useCart();
  const text = "Farmacia de Manipulação que há 28 leva saúde e qualidade de vida até você!";

  useEffect(() => {
    setCart(cart);
  }, []);

  return (
    <Container>
      <Head>
        <title>Página Inicial</title>
      </Head>

      <Header />
      <SectionBackgrounded text={text} backgroundImgURL={FamilyBanner.src} />
      <TitleSection title="Minhas informações" />
      <UserInfo />
      <TitleSection title="Meu Pedido" />
      <Cart />
      <Footer />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get("get_products");
  return { props: { cart: data } };
};
