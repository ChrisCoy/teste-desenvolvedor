import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border: none;
  outline: none;
  width: 100%;
  height: 3rem;
  background: ${(p) => p.theme.primaryColor};
  font-size: 1rem;
  color: ${(p) => p.theme.textWhite};
  border-radius: 3px;

  &:hover{
    filter: opacity(0.8);
    transition: filter 0.2s ease-in-out;

    svg, path{
      translate: rotate(20deg);
    }
  }
`;
