import CardsGames from "./CardsGames";
import { infoCardsGames } from "../Utils/infoCardsGames";
import {
  TitleStyle,
  CardsGamesStyle,
  InputGamesStyle,
  BtnCreateGame,
  CreateGame
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
      <CreateGame>Crear Partido</CreateGame>
      <InputGamesStyle>
        <input placeholder="Lugar" />
        <input placeholder="Fecha y hora" />
        <input placeholder="Cantidad de jugadores" />
        <input placeholder="Posición buscada" />
        <BtnCreateGame>Crear Partido</BtnCreateGame>
      </InputGamesStyle>
    </div>
  );
};

export default Games;
