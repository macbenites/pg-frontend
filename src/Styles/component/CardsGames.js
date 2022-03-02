import styled from "styled-components";
import { Button } from "../reusable/Button";
import { LinkTo } from "../reusable/LinkTo";

export const MainCardsGames = styled.div`
  border-radius: 0.75rem;
  max-width: 300px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DateStyle = styled.div`
  text-align: center;
  padding: 2rem 0;
  color: var(--primary);
  svg {
    margin-right: 1rem;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15px;
  margin-bottom: 15px;
`;

export const NameCenter = styled.div`
  color: var(--primary);
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const BtnGames = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

export const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 0 1rem;
`;

export const Title = styled(LinkTo)`
  color: var(--primary);
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  margin-top: 3rem;
  color: var(--primary);
`;

export const BtnDeleteMatch = styled(Button)`
  width: 100%;
`;

export const DateStyleDet = styled.div`
  text-align: center;
  padding: 2rem 0;
  font-size: 1.6rem;
  color: var(--primary);
  svg {
    margin-right: 1rem;
  }
`;

export const MainCardsGamesDet = styled.div`
  border-radius: 0.75rem;
  max-width: 300px;
  margin: 1rem auto;
  padding: 1rem;
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 1.7rem;
    color: var(--primary);
    text-align: center;
    margin: 0;
  }

  h5 {
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    text-align: center;
    color: var(--primary);
  }
`;
