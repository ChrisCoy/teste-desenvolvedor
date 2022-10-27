import styled from "styled-components";
import { DefaultContainer } from "../../../styles/DefaultContainer";

// lightBlue

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${(p) => p.theme.lightBlue};
  padding: 2rem 0;

  @media (max-width: 320px){
    fieldset{
      display: flex;
      flex-direction: column;
      align-items: center;
      label{
        margin: 0;
        margin-bottom: 1rem;
      }
    }
  }
`;

export const CustomDefaultContainer = styled(DefaultContainer)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`