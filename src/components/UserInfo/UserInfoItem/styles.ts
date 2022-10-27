import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  min-height: 4rem;
  gap: 1rem;

  span {
    font-weight: 600;
    margin: 0;
  }

  p {
    color: ${(props) => props.theme.secondaryText};
    margin: 0;
    max-width: 300px;
  }
`;
