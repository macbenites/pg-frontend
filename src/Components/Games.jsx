import React from "react";
import Logo from "./Logo";
import CardsGames from "./CardsGames";
import { infoCardsGames } from "../Utils/infoCardsGames";
import {
  TitleStyle,
  BtnGamesFilter,
  CardsGamesStyle,
  InputGamesStyle,
  BtnCreateGame,
} from "../Styles/Games";

function Games() {
  return (
    <div>
      <Logo />
      <TitleStyle>Partidos</TitleStyle>
      <BtnGamesFilter>
        <p>Filtrar</p>
      </BtnGamesFilter>
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
      <h2>Crear Partido</h2>

      <InputGamesStyle>
        <input placeholder="Lugar" />
        <input placeholder="Fecha y hora" />
        <input placeholder="Cantidad de jugadores" />
        <input placeholder="Posición buscada" />
        <BtnCreateGame>Crear Partido</BtnCreateGame>
      </InputGamesStyle>
    </div>
  );
}

export default Games;
