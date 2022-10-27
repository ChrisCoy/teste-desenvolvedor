import { Container, Content } from "./styles";

interface SectionBackgroundedProps {
  text: string;
  backgroundImgURL: string;
}

export default function SectionBackgrounded({ text, backgroundImgURL }: SectionBackgroundedProps) {
  return (
    <Container backgroundImageUrl={backgroundImgURL}>
      <Content>
        <h1>{text}</h1>
      </Content>
    </Container>
  );
}
