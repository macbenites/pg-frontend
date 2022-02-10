import React from "react";
import {MainCardsGames, DateStyle, Players, Search, Location, ButtonCardsGames} from '../Styles/CardsGames'

function CardsGames({location, date, players, search}){
    return (
        <div>
            <MainCardsGames>
                <Location>{location}</Location>
                <DateStyle>{date}</DateStyle>
                <Players>{players}</Players>
                <Search>{search}</Search>
                <ButtonCardsGames>
                    Unirme
                </ButtonCardsGames>
            </MainCardsGames>
        </div>
    )
};

export default CardsGames;