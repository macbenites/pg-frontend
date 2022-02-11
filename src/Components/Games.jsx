import CardsGames from "./CardsGames";
import { infoCardsGames } from "../Utils/infoCardsGames";
import {
  TitleStyle,
  CardsGamesStyle,
  InputGamesStyle,
  BtnCreateGame,
  CreateGame,
  SelectLocation,
  SelectDate,
  SelectSearch
} from "../Styles/Games";

function Games() {
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
