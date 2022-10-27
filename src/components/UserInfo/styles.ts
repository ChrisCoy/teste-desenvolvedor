import styled from "styled-components";

export const InfoContainer = styled.div`
  padding: 1rem;
  margin: 1rem auto;
`;

export const InfoContent = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin-top: 2rem;

  div + div {
    margin-top: 1rem;
  }
`;
