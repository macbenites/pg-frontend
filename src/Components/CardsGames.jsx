import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {MainCardsGames, DateStyle, Players, NameCenter, ButtonJoinCardsGames, BtnInviteCardsGames} from '../Styles/CardsGames'
import { joinMatch } from "../Redux/Actions";

function CardsGames({nameCenter, date, players}){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleClick(e){
        e.preventDefault();
        dispatch(joinMatch());
        alert('Te has unido con éxito');
    };

    function handleCLickInvite(e){
        navigate('/home/players');
    };

    return (
        <div>
            <MainCardsGames>
                <NameCenter>{nameCenter}</NameCenter>
                <DateStyle>Fecha y hora: {date}</DateStyle>
                <Players>Faltan: {players} jugadores</Players>
                <ButtonJoinCardsGames onClick={e => handleClick(e)}>Unirme</ButtonJoinCardsGames> 
                <BtnInviteCardsGames onClick={e => handleCLickInvite(e)}>Invitar</BtnInviteCardsGames>
            </MainCardsGames>
        </div>
    );
};

export default CardsGames;