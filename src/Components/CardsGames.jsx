import React from "react";
import { useDispatch } from "react-redux";
import {MainCardsGames, DateStyle, Players, NameCenter, ButtonCardsGames} from '../Styles/CardsGames'
import { joinMatch } from "../Redux/Actions";

function CardsGames({nameCenter, date, players}){

    const dispatch = useDispatch();

    function handleClick(e){
        e.preventDefault();
        dispatch(joinMatch());
        alert('Te has unido con éxito');
    };

    return (
        <div>
            <MainCardsGames>
                <NameCenter>{nameCenter}</NameCenter>
                <DateStyle>Fecha y hora: {date}</DateStyle>
                <Players>Jugadores: {players}</Players>
                <ButtonCardsGames onClick={e => handleClick(e)}>
                    Unirme
                </ButtonCardsGames> 
            </MainCardsGames>
        </div>
    );
};

export default CardsGames;