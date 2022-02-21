import styled from "styled-components";
import { Button } from "../Styles/reusable/Button";
import { InputForm } from "../Styles/reusable/Input";

export const BtnBack = styled(Button)`
    width: 130px;
    height: 40px;
    margin-top: 30px;
`;

export const TextJoin = styled.h4`
    font-size: 35px;
    text-align: center;
    color: #abd1c6;
`;

export const InputUsername = styled(InputForm)`
    display: flex;
    width: 387px;
    margin-left: 350px;
    padding-left: 30px;
    border: none;
    border-radius: 14px;
    background-color: #206F6C;
    color: white;
    height: 25px;
`;

export const InputPosition = styled(InputForm)`
    display: flex;
    width: 387px;
    margin-top: 19px;
    margin-left: 350px;
    padding-left: 30px;
    border: none;
    border-radius: 14px;
    background-color: #206F6C;
    color: white;
    height: 25px;
`;

export const BtnJoinStyle = styled(Button)`
    margin-top: 20px;
    margin-left: 350px;
    width: 432px;
    height: 55px;
    font-size: 18px;
    border-radius: 14px;
    color: #004643;
`;

export const SelectSearch = styled.div`
    display: flex;
    width: 432px;
    height: 55px;
    margin-left: 350px;
    padding-left: 30px;
    border: none;
    border-radius: 14px;
    background-color: #206F6C;
    color: white;
`;