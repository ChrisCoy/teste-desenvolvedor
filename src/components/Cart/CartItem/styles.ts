import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  div {
    display: flex;
  }

  & {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 1.4rem;
  }
`;

export const Name = styled.div`
  font-size: 1.05rem;
  font-weight: 600;
  max-width: 500px;
  line-height: 1.6rem;
`;

export const Resume = styled.div`
  max-width: 400px;
  color: ${(p) => p.theme.secondaryText};
`;
export const Info = styled.div`
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;
export const Amount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  svg {
    border-radius: 5px;
  }

  svg:hover {
    background: ${(p) => p.theme.primaryColor};
    color: white;
    padding: 2px;
  }
`;

export const Price = styled.div`
  font-size: 1.825rem;
  p {
    font-size: 0.825rem;
    line-height: 2.2rem;
  }
`;
