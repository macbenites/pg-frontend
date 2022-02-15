import React from "react";
import {MainCardsGames, DateStyle, Players, NameCenter, ButtonCardsGames} from '../Styles/CardsGames'

function CardsGames({nameCenter, date, players}){

    return (
        <div>
            <MainCardsGames>
                <NameCenter>{nameCenter}</NameCenter>
                <DateStyle>{date}</DateStyle>
                <Players>{players}</Players>
                {/* <Search>{search}</Search> */}
                <ButtonCardsGames>
                    Unirme
                </ButtonCardsGames> 
            </MainCardsGames>
        </div>
    )
};

export default CardsGames;