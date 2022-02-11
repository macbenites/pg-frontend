import React from "react";
import CardsGames from "./CardsGames";
import { infoCardsGames } from "../Utils/infoCardsGames";
import {
  TitleStyle,
  CardsGamesStyle,
} from "../Styles/Games";


function Games() {
  return (
    <div>
      <TitleStyle>Partidos</TitleStyle>
      <CardsGamesStyle>
        {infoCardsGames.map((card) => (
          <CardsGames
            key={card.location}
            location={card.location}
            date={card.date}
            players={card.players}
            search={card.search}
          />
        ))}
      </CardsGamesStyle>
    </div>
  );
};

export default Games;
