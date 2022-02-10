import styled from "styled-components";
import { Button } from "./reusable/Button";

export const MainCardsGames = styled.div`
  border-radius: 30px;
  width: 190px;
  height: 190px;
  background-color: #abd1c6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

export const DateStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: -20px;
  font-size: 15px;
`;

export const Players = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15px;
  margin-top: 20px;
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15px;
`;

export const Location = styled.div`
  display: flex;
  justify-content: center;
  font-size: 22px;
  margin-top: 10px;
`;

export const ButtonCardsGames = styled(Button)`
  background-color: #004643;
  width: 100px;
  height: 30px;
  display: flex;
  margin-left: 45px;
`;
