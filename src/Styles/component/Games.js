import styled from "styled-components";
import { Button } from "../reusable/Button";

export const TitleStyle = styled.h2`
  color: #abd1c6;
  display: flex;
`;

export const CardsGamesStyle = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 1rem 0;
`;

export const Filters = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  @media (min-width: 550px) {
    flex-direction: row;
  }
`;

export const BtnCreateGame = styled(Button)`
  margin: 1rem 0;
`;

export const CreateGame = styled.h2`
  color: #abd1c6;
  margin-top: 100px;
  font-size: 40px;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: 1em;
  border-radius: 1rem;
  background-color: var(--primary-light);

  svg {
    fill: var(--secondary);
    margin: 0 1rem;
    font-size: 1.2rem;
  }
`;
