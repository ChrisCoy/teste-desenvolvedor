import { MouseEventHandler } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  onClick?: (evt?: any) => void;
  children?: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
}
