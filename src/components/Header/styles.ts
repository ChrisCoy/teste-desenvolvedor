import styled from "styled-components";

export const Container = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 130px;
  width: 100%;
  color: ${(props) => props.theme.primaryColor};

  h1 {
    font-family: "Times New Roman", Times, serif;
    font-weight: 300;
    font-size: 3.4rem;
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 15vw;
    }
  }

  h6 {
    font-weight: 400;
    letter-spacing: 0.4rem;
    text-align: center;
  }
`;
