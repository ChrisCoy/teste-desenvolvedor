import styled from "styled-components";

interface ContainerProps {
  backgroundImageUrl: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 380px;
  width: 100%;
  background-image: url(${(props) => props.backgroundImageUrl});
  background-size: cover;
  background-position: center;

  h6 {
    font-weight: 400;
    letter-spacing: 0.4rem;
  }
`;

export const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 1rem;
  h1 {
    font-size: 2.2rem;
    font-weight: 500;
    color: ${(props) => props.theme.textWhite};
    text-align: center;
    letter-spacing: 1px;
  }
`;
