import { Content } from "./styles";
import CartItem from "./CartItem";
import { DefaultContainer } from "../../styles/DefaultContainer";
import CartResult from "./CartResult";
import FinishPurchase from "./FinishPurchase";
import useCart from "../../hooks/useCart";
import { useEffect, useState } from "react";

export default function Cart() {
  const { setCart, cart } = useCart();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(
      cart.reduce<any>((sum, prod) => {
        return sum + prod.amount * prod.price;
      }, 0)
    );
  }, [cart]);

  return (
    <>
      <DefaultContainer>
        <Content>
          <>
            {cart.map((prod: Product) => (
              <CartItem product={prod} key={prod.id}/>
            ))}
          </>

          <CartResult text="Frete" value={total * 0.05} />
          <CartResult text="Total" value={total} highlight />
        </Content>
      </DefaultContainer>
      <FinishPurchase />
    </>
  );
}
