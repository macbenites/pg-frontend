import styled from "styled-components";
import { Button } from "../reusable/Button";

export const DivCourtDetail = styled.div`
    color: var(--secondary);
    font-size: 28px;
    margin-left: 150px;
`;

export const BtnBack = styled(Button)`
    display: flex;
    margin-left: 900px;
    margin-top: -480px;
`;

export const BtnReserve = styled(Button)`
    display: flex;
    margin-left: 900px;
    margin-bottom: 500px;
    margin-top: 20px;
    background-color: #f9bc60;
    color: var(--primary);
    :hover{
        background-color: #f9bc80;
    };
`;
