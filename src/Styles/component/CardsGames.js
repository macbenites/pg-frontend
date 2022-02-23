import styled from "styled-components";
import { Button } from "../reusable/Button";
import { LinkTo } from "../reusable/LinkTo";

export const MainCardsGames = styled.div`
  border-radius: 0.75rem;
  width: 90%;
  margin: 0 auto;
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  :hover {
    background-color: #f9bc60;
  }
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

export const ButtonJoinCardsGames = styled(Button)`
  background-color: #004643;
  width: 80px;
  height: 30px;
  display: flex;
  margin-left: 15px;
`;

export const BtnInviteCardsGames = styled(Button)`
  background-color: #004643;
  width: 80px;
  height: 30px;
  display: flex;
  margin-left: 100px;
  margin-top: -40px;
`;

export const BtnGames = styled(Button)`
  background-color: #004643;
  width: 100%;
  margin-top: 1rem;
  :hover {
    background-color: var(--primary-light);
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Title = styled(LinkTo)`
  color: var(--primary);
  text-align: center;
`;
