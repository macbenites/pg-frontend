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
  margin-top: 30px;
`;

export const DateStyle = styled.div`
  text-align: center;
  padding-top: 10px;
`;

export const Players = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15px;
`;

export const Search = styled.div` 
  display: flex;
  justify-content: center;
  font-size: 15px;
  margin-bottom: 15px;
`;

export const NameCenter = styled.div`
  color:#004643;
  text-align: center;
  font-weight: bold;
  font-size: 23px;
  margin-top: 15px;
`;

export const ButtonCardsGames = styled(Button)`
  background-color: #004643;
  width: 100px;
  height: 30px;
  display: flex;
  margin-left: 45px;
`;
