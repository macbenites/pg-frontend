import styled from "styled-components";
import { Button } from "../reusable/Button";
import { InputForm } from "../reusable/Input";

export const DivChat = styled.div`
    color: var(--secondary);
    font-size: 28px;
    text-align: center;
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
    :hover{
        background-color: #f9bc80;
    };
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
    :hover{
        background-color: #f9bc80;
    };
`;

export const BtnBack = styled(Button)`
    height: 40px;
    width: 100px;
`;

