import styled from "styled-components";

export const Container = styled.div`
  height: 2.5rem;
  background: ${(props) => props.theme.primaryColor};
`;

//

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: ${(props) => props.theme.maxWidth};
  height: 100%;
  color: ${(props) => props.theme.textWhite};
  font-size: 1.1rem;
`;
