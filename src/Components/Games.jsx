import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { context } from "../Context/authContext";
import Logo from "./Logo";
import CardsGames from "./CardsGames";
import { infoCardsGames } from "../Utils/infoCardsGames";
import {
  TitleStyle,
  BtnGamesFilter,
  CardsGamesStyle,
  InputGamesStyle,
  CreateGameStyle,
  BtnCreateGame,
  BtnBack,
} from "../Styles/Games";

function Games() {
  const navigate = useNavigate();
  const { user } = useContext(context);

  useEffect(() => console.log(user), [user])

  function handleCLick(e){
      navigate('/home')
  };

  return (
    <div>
      <Logo />
      <BtnBack onClick={(e) => {handleCLick(e)}}>Volver</BtnBack>
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
      <CreateGameStyle>Crear Partido</CreateGameStyle>

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
