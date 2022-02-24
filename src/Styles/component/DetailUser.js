import styled from "styled-components";
import { Button } from "../reusable/Button";

export const DivUserDetail = styled.div`
    color: var(--secondary);
    font-size: 40px;
    text-align: left;
    margin-left: 100px;
    img{
        display: flex;
        margin-left: 600px;
        margin-top: -300px;
        width: 30rem;
        height: 30rem;
        border-radius: 15px;
    };
`;

export const ButtonMessage = styled(Button)`
    display: flex;
    margin-top: -130px;
    margin-left: 270px;
    /* margin-bottom: 600px; */
    background-color: #f9bc60;
    color: var(--primary);
    :hover{
        background-color: #f9bc80;
    };
`;

export const ButtonBack = styled(Button)`
    display: flex;
    margin-top: 20px;
    margin-left: 270px;
    margin-bottom: 600px;
`;