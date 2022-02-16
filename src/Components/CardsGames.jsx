import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {MainCardsGames, DateStyle, Players, NameCenter, ButtonJoinCardsGames, BtnInviteCardsGames} from '../Styles/CardsGames'
import { joinMatch } from "../Redux/Actions";
// import { useParams } from "react-router-dom"

function CardsGames({nameCenter, date, players}){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const {id} = useParams();
    const allPlayers = useSelector((state) => state.players)

    function handleClick(e){
        e.preventDefault();
        dispatch(joinMatch());
        alert('Te has unido con éxito');
    };

    function handleCLickInvite(){
        navigate('/home/players');
    };

    console.log(allPlayers)

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