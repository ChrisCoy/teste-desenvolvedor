import Button from "../../Button";
import { Container, CustomDefaultContainer } from "./styles";
import { BsCheck2 } from "react-icons/bs";
import useCart from "../../../hooks/useCart";
import api from "../../../services/api";
import { useRouter } from "next/router";

export default function FinishPurchase() {
  const nextRouter = useRouter();
  const { cart } = useCart();

  function handleSubmitButton() {
    if (cart.length) {
      api.post("/sell", { cart }).then((res) => {
        if (res.status === 200) nextRouter.push("/success_purchase");
      });
    } else {
      alert("Carrinho vazio!");
    }
  }

  return (
    <Container>
      <CustomDefaultContainer>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam doloremque, quod quo
          repudiandae, magni maiores, explicabo est quae pariatur?
        </div>
        <fieldset id="radioboxes">
          <input
            type="radio"
            id="facebook"
            value="facebook"
            defaultChecked
            name="radioboxes"
          />
          <label htmlFor="facebook">Facebook</label>
          <input type="radio" id="instagram" value="instagram" name="radioboxes" />
          <label htmlFor="instagram">Instagram</label>
          <input type="radio" id="indicacao" value="indicacao" name="radioboxes" />
          <label htmlFor="indicacao">Indicação</label>
        </fieldset>
        <Button onClick={handleSubmitButton}>
          <BsCheck2 size={20} /> Confirmar pedido
        </Button>
      </CustomDefaultContainer>
    </Container>
  );
}
