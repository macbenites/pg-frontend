import React from "react";
import CardsGames from "./CardsGames";
// import { infoCardsGames } from "../Utils/infoCardsGames";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  TitleStyle,
  CardsGamesStyle,
  SelectLocation,
  SelectDate,
  SelectSearch,
  BtnCreateGame
} from "../Styles/Games";

function Games() {
  
  const allMatches = useSelector((state) => state.matches)
  const navigate = useNavigate();
  console.log(allMatches)

  function handleClick(){
    navigate('/gamesCreate')
  }

  return (
    <div>
      <TitleStyle>Partidos</TitleStyle>
      <BtnCreateGame onClick={e => handleClick(e)}>Crear partido</BtnCreateGame>
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
        {allMatches && allMatches.map((el) => (
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
