import styled from "styled-components";
import { Button } from "./reusable/Button";

export const TitleStyle = styled.h2`
  color: #abd1c6;
  display: flex;
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const CardsGamesStyle = styled.div`
  display: flex;
  flex-direction: raw;
  justify-content: space-between;
  margin-top: 50px;
`;

export const InputGamesStyle = styled.form`
  background-color: #f9bc60;
  border-radius: 15px;
  padding: 20px;
  margin-top: 50px;
  
  input {
    width: 1110px;
    height: 50px;
    display: flex;
    flex-direction: column;
    background-color: #004643;
    border-radius: 15px;
    margin-left: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    border: none;
    padding-left: 20px;
    font-size: 15px;
  }
`;

export const CreateGameStyle = styled.h2`
    color: #abd1c6;
    font-size: 30px;
    margin-top: 70px;
`;

export const BtnCreateGame = styled(Button)`
  margin-left: 490px;
  width: 200px;
`;

export const BtnGamesFilter = styled(Button)`
  width: 150px;
  height: 40px;
  margin-top: 1rem;
  margin-left: 1050px;
  background-color: #f9bc60;
  display: flex;
  margin-top: -60px;
  p {
    color: #004643;
  }
`;

export const BtnBack = styled(Button)`
    margin-left: 1040px;
    margin-top: -30px;
`;
