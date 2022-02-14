import React from "react";
import CardsGames from "./CardsGames";
// import { infoCardsGames } from "../Utils/infoCardsGames";
import { useSelector } from "react-redux";
import {
  TitleStyle,
  CardsGamesStyle,
  SelectLocation,
  SelectDate,
  SelectSearch,
} from "../Styles/Games";

function Games() {
  
  const allMatches = useSelector((state) => state.matches)
  console.log(allMatches)
  

  return (
    <div>
      <TitleStyle>Partidos</TitleStyle>
      <SelectLocation>
        <option>Lugar</option>
      </SelectLocation>
      <SelectDate>
        <option>Fecha y Hora</option>
      </SelectDate>
      <SelectSearch>
        <option>Posición buscada</option>
      </SelectSearch>
      <CardsGamesStyle>
        {allMatches.map((el) => (
          <CardsGames
            key={el.nameCenter}
            nameCenter={el.nameCenter}
            date={el.date}
            players={el.players}
            // search={el.search}
          />
        ))}
      </CardsGamesStyle>
    </div>
  );
}

export default Games;
