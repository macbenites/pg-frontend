import React from "react";
import {MainCardsTeams, TeamName, Players, Search, ButtonCardsTeams} from '../Styles/CardsTeams'

function CardsTeams({teamName, players, search}){
    return (
        <div>
            <MainCardsTeams>
                <TeamName>{teamName}</TeamName>
                <Players>{players}</Players>
                <Search>{search}</Search>
                <ButtonCardsTeams>
                    Unirme
                </ButtonCardsTeams>
            </MainCardsTeams>
        </div>
    )
};

export default CardsTeams;