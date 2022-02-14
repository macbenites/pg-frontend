import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getMatches, joinMatch } from "../Redux/Actions/index";
import {MainCardsGames, DateStyle, Players, Search, NameCenter, ButtonCardsGames} from '../Styles/CardsGames'
// import { useParams, Link } from "react-router-dom";

function CardsGames({nameCenter, date, players, search}){

    const dispatch = useDispatch();
    const [ state, setState ] = useState({
    });

    useEffect(() => {
        dispatch(getMatches()); 
        dispatch(joinMatch())
    }, [dispatch]);

    function handleCLick(e){
        dispatch(joinMatch());
        setState({
            ...state,
            players: [...players, players +1]
        })
    };

    return (
        <div>
            <MainCardsGames>
                <NameCenter>{nameCenter}</NameCenter>
                <DateStyle>{date}</DateStyle>
                <Players>{players}</Players>
                <Search>{search}</Search>
                <ButtonCardsGames onClick={e => {handleCLick(e)}}>
                    Unirme
                </ButtonCardsGames> 
            </MainCardsGames>
        </div>
    )
};

export default CardsGames;