import React from "react";
import formatCurrency from "../../../util/formatCurrency";
import { Container, Value } from "./styles";

interface CartResultProps {
  text: string;
  value: number;
  highlight?: boolean;
}

export default function CartResult({ text, value, highlight = false }: CartResultProps) {
  return (
    <Container>
      <h2>{text}</h2>
      <Value highlight={highlight}>
        <p>R$</p>
        {formatCurrency(value)}
      </Value>
    </Container>
  );
}
