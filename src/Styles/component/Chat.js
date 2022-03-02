import styled from "styled-components";
import { Button } from "../reusable/Button";
import { InputForm } from "../reusable/Input";

export const ContainerChat = styled.div`
  padding: 0 2rem;
`;
export const DivChat = styled.div`
  color: var(--secondary);
  border: solid 2px var(--secondary);
  border-radius: 0.75rem;
  font-size: 28px;
  position: relative;
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  p {
    font-size: 1rem;
    text-align: left;
    margin: 0;
  }

  strong {
    font-size: 0.8rem;
    text-align: left;
  }
`;

export const MsgChat = styled.div`
  margin: 1rem 0;
`;

export const InputFormChat = styled(InputForm)`
  width: 270px;
  height: 12px;
  border-radius: 15px;
`;

export const BtnSend = styled(Button)`
  display: flex;
  margin-left: 450px;
  margin-top: 20px;
  height: 40px;
  width: 300px;
  background-color: #f9bc60;
  color: var(--primary);
  :hover {
    background-color: #f9bc80;
  }
`;

export const BtnShowUpdate = styled(Button)`
  display: flex;
  margin-left: 450px;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 40px;
  width: 300px;
  background-color: #f9bc60;
  color: var(--primary);
  :hover {
    background-color: #f9bc80;
  }
`;

export const BtnBack = styled(Button)`
  height: 40px;
  width: 100px;
`;

export const Send = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: 1em;
  border-radius: 1rem;
  background-color: var(--primary-light);
  input {
    color: var(--text-color);
    outline: none;
    border: none;
    width: 100%;
    font-size: 1.1rem;
    background-color: transparent;
    ::placeholder {
      color: #d1d1d1;
    }
  }
`;

export const Btn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  svg {
    fill: var(--secondary);
    margin: 0 1rem;
    font-size: 1.5rem;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
`;
