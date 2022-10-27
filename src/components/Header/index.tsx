import { Container } from "./styles";
import Logo from "../../../public/logo.png";

export default function Header() {
  return (
    <Container>
      <h1>MultiFórmulas</h1>
      <h6>Farmacia de Manipulação</h6>

      {/* achei que a qualidade da logo estava
      muito pixelado, e por isso achei melhor fazer em css mesmo. */}
      {/* <img src={Logo.src} alt="MultiFarm logo" /> */}
    </Container>
  );
}
