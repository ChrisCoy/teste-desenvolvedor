import formatCurrency from "../../../util/formatCurrency";
import { Amount, Container, Info, Name, Price, Resume } from "./styles";
import {
  AiOutlinePlusCircle as PlusIcon,
  AiOutlineMinusCircle as MinusIcon,
} from "react-icons/ai";
// import { RiCloseCircleLine as ClearCartIcon } from "react-icons/ri";
import { CgTrashEmpty as ClearCartIcon } from "react-icons/cg";
import { CSSProperties } from "react";
import useCart from "../../../hooks/useCart";

const styleButtons: CSSProperties = {
  cursor: "pointer",
};

export default function CartItem({ product }: { product: Product }) {
  const { changeAmount, removeProd } = useCart();
  return (
    <Container>
      <Name>{product.name}</Name>
      <Resume>{product.resume}</Resume>
      <Info>
        <Amount>
          <MinusIcon
            size={24}
            onClick={() => changeAmount(product.id, product.amount - 1)}
            style={styleButtons}
          />
          Quantidade: {product.amount}
          <PlusIcon
            size={24}
            onClick={() => changeAmount(product.id, product.amount + 1)}
            style={styleButtons}
          />
          <ClearCartIcon
            size={24}
            onClick={() => removeProd(product.id)}
            style={styleButtons}
          />
        </Amount>
        <Price>
          <p>R$</p>
          {formatCurrency(product.price * product.amount)}
        </Price>
      </Info>
    </Container>
  );
}
