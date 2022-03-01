import styled from "styled-components";
import { Button } from "../reusable/Button";

export const DivMatchDetail = styled.div`
  color: var(--secondary);
  h1 {
    font-size: 2.2rem;
  }
  p {
    font-size: 1.1rem;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  svg {
    right: 0;
    fill: var(--Links);
    font-size: 2.2rem;
  }
`;
export const BtnBack = styled(Button)``;

export const ContainerMatch = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 1rem;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 0.8rem;
  border-radius: 0.75rem;
  background-color: var(--primary-light);
  font-weight: 900;
`;
