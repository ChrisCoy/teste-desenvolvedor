import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container } from "../../styles/home";
import FamilyBanner from "../../../public/banner.png";
import SectionBackgrounded from "../../components/SectionBackgrounded";

export default function index() {
  const text = "Obrigado por comprar na MultiFórmulas, volte sempre!";
  return (
    <Container>
      <Head>
        <title>Sucesso!</title>
      </Head>

      <Header />
      <SectionBackgrounded text={text} backgroundImgURL={FamilyBanner.src} />

      <Footer />
    </Container>
  );
}
