import styled from "styled-components";

interface ValueProps {
  highlight: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: 600;
  h2 {
    font-weight: 400;
  }
  & + & {
    padding-top: 1rem;
    border-top: 1px solid #e0e0e0;
  }
`;
export const Value = styled.div<ValueProps>`
  display: flex;
  font-size: 1.825rem;
  color: ${(p) => (p.highlight ? p.theme.highlightColor : p.theme.primaryText)};
  p {
    font-size: 0.825rem;
    line-height: 2.2rem;
  }
`;
