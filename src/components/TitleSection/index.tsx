import { DefaultContainer } from "../../styles/DefaultContainer";
import { Container, Content } from "./styles";

interface TitleSectionProps {
  title: string;
}

export default function TitleSection({ title }: TitleSectionProps) {
  return (
    <Container>
      <DefaultContainer>
        <Content>{title}</Content>
      </DefaultContainer>
    </Container>
  );
}
