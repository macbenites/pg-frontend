import styled from "styled-components";
import { Button } from "./reusable/Button";

export const TitleStyle = styled.h2`
  color: #abd1c6;
  display: flex;
  font-size: 40px;
  margin-bottom: -30px;
`;

export const CardsGamesStyle = styled.div`
  display:flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0px;

`;

export const InputGamesStyle = styled.form`
  background-color: #abd1c6;
  border-radius: 15px;
  padding: 20px;
  margin-top: 50px;
  h2 {
    color: #004643;
    margin-left: 20px;
    font-size: 30px;
  }
  input {
    width: 850px;
    height: 50px;
    display: flex;
    flex-direction: column;
    background-color: #004643;
    border-radius: 15px;
    margin: 20px;
    border: none;
    padding-left: 20px;
    font-size: 15px;
  }
`;

export const BtnCreateGame = styled(Button)`
  width: 870px;
  height: 50px;
  margin: 20px;
  border-radius: 15px;
`;

export const CreateGame = styled.h2`
  color:#abd1c6;
  margin-top: 100px;
  font-size: 40px;
`;

export const SelectLocation = styled.select`
  height: 30px;
  width: 336px;
  margin: 20px;
  margin-top: 70px;
  margin-left: 20px;
  border: none;
  background-color: #206F6C;
  color: white
`;

export const SelectDate = styled.select`
  height: 30px;
  width: 336px;
  margin:20px;
  border: none;
  background-color: #206F6C;
  color: white;
`;

export const SelectSearch = styled.select`
  height: 30px;
  width: 336px;
  margin: 20px;
  border: none;
  background-color: #206F6C;
  color: white
`;