import CardsGames from "./CardsGames";
import {
  getMatches,
  getFields,
  orderByDateTime,
  orderByPlayers,
} from "../Redux/Actions/index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  TitleStyle,
  CardsGamesStyle,
  SelectLocation,
  SelectDate,
  SelectSearch,
  BtnCreateGame,
} from "../Styles/component/Games";

function Games() {
  const allMatches = useSelector((state) => state.matches);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(allMatches);
  const fields = useSelector((state) => state.fields);

  useEffect(() => {
    dispatch(getMatches());
    dispatch(getFields());
  }, [dispatch]);

  function handleClick() {
    navigate("/gamesCreate");
  }

  const handleChange = (e) => {
    dispatch(orderByDateTime(e.target.value));
  };

  const handleOrderByPlayers = (e) => {
    dispatch(orderByPlayers(e.target.value));
  };

  return (
    <div>
      <TitleStyle>Partidos</TitleStyle>
      <BtnCreateGame onClick={(e) => handleClick(e)}>
        Crear partido
      </BtnCreateGame>
      <SelectLocation>
        <option value="">Lugar</option>
        {fields.map((element) => (
          <option key={element.id} value={element.name}>
            {element.name}
          </option>
        ))}
      </SelectLocation>
      <SelectDate onChange={handleChange}>
        <option value="latest">Reciente</option>
        <option value="oldest">Antiguo</option>
      </SelectDate>
      <SelectSearch onChange={handleOrderByPlayers}>
        <option value="">Cantidad Jugadores</option>
        <option value="decreciente">Menos Jugadores anotados</option>
        <option value="incremental">Mas Jugadores anotados</option>
      </SelectSearch>
      <CardsGamesStyle>
        {allMatches &&
          allMatches.map((el, index) => (
            <CardsGames
              key={index}
              nameCenter={el.nameCenter}
              date={el.date}
              players={el.players}
              id={el.id_match}
            />
          ))}
      </CardsGamesStyle>
    </div>
  );
}

export default Games;
