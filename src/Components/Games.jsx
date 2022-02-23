import CardsGames from "./CardsGames";
import {
  getMatches,
  orderByDateTime,
  orderByPlayers,
  filterMatchBySportcenter,
} from "../Redux/Actions/index";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  TitleStyle,
  CardsGamesStyle,
  SelectDate,
  SelectSearch,
  BtnCreateGame,
  Search,
} from "../Styles/component/Games";
import { FaSearch } from "react-icons/fa";
import { TopFields } from "../Styles/component/Fields";

function Games() {
  const allMatches = useSelector((state) => state.matches);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(allMatches);

  useEffect(() => {
    dispatch(getMatches());
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

  const onClickSearch = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Ingresar cancha a buscar");
    } else {
      dispatch(filterMatchBySportcenter(input));
      setInput("");
    }
  };

  const onChangeSearch = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div>
      <TitleStyle>Partidos</TitleStyle>
      <BtnCreateGame onClick={(e) => handleClick(e)}>
        Crear partido
      </BtnCreateGame>
      <TopFields>
        <Search>
          <FaSearch onClick={onClickSearch} />
          <input
            onChange={onChangeSearch}
            name="search"
            type="text"
            value={input}
            placeholder="Buscar..."
            autoComplete="off"
          />
        </Search>
      </TopFields>

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
