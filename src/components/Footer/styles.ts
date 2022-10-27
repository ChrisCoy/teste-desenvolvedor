import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.4rem;
  background: #272727;
  font-size: 0.825rem;
  color: ${(p) => p.theme.textWhite};
`;
