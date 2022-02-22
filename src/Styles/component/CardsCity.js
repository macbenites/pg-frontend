import styled from "styled-components";
import { LinkTo } from "../reusable/LinkTo";
import { Button } from "../reusable/Button";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  background-color: var(--secondary);
  margin: 1rem;
  padding: 0.7rem;
  border-radius: 1.8rem;

  h3 {
    margin: 0;
  }

  p {
    text-transform: lowercase;
    margin: 0;
  }
  p::first-letter {
    text-transform: capitalize;
  }

  @media (min-width: 568px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ImgCard = styled.div`
  img {
    max-width: 100%;
    height: 100%;
    border-radius: 1.5rem;
  }
`;

export const Content = styled.div`
  color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const LinkCourt = styled(LinkTo)`
  color: var(--primary);
  cursor: pointer;
`;

export const BtnReserve = styled(Button)`
  background-color: #004643;
  width: 100%;
  margin-top: 1rem;
  :hover {
    background-color: var(--primary-light);
  }
`;
