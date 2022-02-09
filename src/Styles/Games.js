import styled from "styled-components";
import { Button } from "./reusable/Button"

export const TitleStyle = styled.h2`
color:#abd1c6;
display: flex;
`

export const CardsGamesStyle = styled.div`
display: flex;
flex-direction: raw;
justify-content: space-between;
margin-top: 50px;
`

export const InputGamesStyle = styled.form`
background-color: #F9BC60;
border-radius: 15px;
padding: 20px;
margin-top: 50px;
h2{
    color:#004643;
    margin-left: 20px;
    font-size: 30px;
}
input{
    width: 1110px;
    height: 50px;
    display: flex;
    flex-direction: column;
    background-color:#004643;
    border-radius: 15px;
    margin-left: 20px;
    margin-bottom: 20px;
    border: none;
    padding-left: 20px;
    font-size: 15px;
}
`

export const BtnCreateGame = styled(Button)`
margin-left: 970px;
`

export const BtnGamesFilter = styled(Button)`
    width: 150px;
    height: 40px;
    margin-top: 1rem;
    margin-left: 1050px;
    background-color: #F9BC60;
    display: flex;
    margin-top: -90px;
    p{
        color: #004643;
    }
`