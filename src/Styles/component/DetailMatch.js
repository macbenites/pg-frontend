import styled from "styled-components";
import { Button } from "../reusable/Button";

export const DivMatchDetail = styled.div`
    color: var(--secondary);
    font-size: 28px;
    text-align: center;
`;

export const BtnBack = styled(Button)`
    display: flex;
    margin-top: -300px;
    margin-bottom: 700px;
    margin-left: 40px;
`;

export const BtnRemovePlayer = styled(Button)`
    width: 100px;
    height: 40px;
    display: flex;
    margin-left: 100px;
    margin-top: -35px;
    background-color: #f9bc60;
    color: var(--primary);
    :hover{
        background-color: #f9bc80;
    };
`;
