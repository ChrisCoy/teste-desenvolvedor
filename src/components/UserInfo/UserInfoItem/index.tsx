import { Container } from "./styles";

interface UserInfoItemProps {
  title: string;
  content?: string;
}

export default function UserInfoItem({ title, content }: UserInfoItemProps) {
  return (
    <Container>
      <span>{title}</span>
      <p>{content}</p>
    </Container>
  );
}
