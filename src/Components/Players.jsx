import { useEffect, useState } from "react";
import Player from "./Player";
import { Label } from "../Styles/reusable/Input";
import { Select } from "../Styles/reusable/Select";
import { Filter, PlayersDiv, Search } from "../Styles/component/Players";
import { useDispatch, useSelector } from "react-redux";
import { TopFields } from "../Styles/component/Fields";
import {
  showUsers,
  getNeighborhoods,
  filterByNameUser,
} from "../Redux/Actions";
import { FaSearch } from "react-icons/fa";
import {
  filterPlayersByPosition,
  filterPlayersByNeighborhoods,
  resetPlayersFilter,
} from "../Redux/Actions";
import { BtnCreateGame, TitleStyle } from "../Styles/component/Games";

const Players = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { users, neighborhoods } = useSelector((state) => state);

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onClickSearch = (e) => {
    e.preventDefault();
    if (!search) {
      alert("Ingresar nombre a buscar");
    } else {
      dispatch(filterByNameUser(search));
      setSearch("");
    }
  };

  const handleFilterByPosition = (e) => {
    e.target.value === "todos"
      ? dispatch(resetPlayersFilter())
      : dispatch(filterPlayersByPosition(e.target.value));
  };

  const handleFilterByNeighborhood = (e) => {
    e.target.value === "todos"
      ? dispatch(resetPlayersFilter())
      : dispatch(filterPlayersByNeighborhoods(e.target.value));
  };

  const resetFilters = () => {
    dispatch(resetPlayersFilter());
  };

  useEffect(() => {
    dispatch(showUsers());
    dispatch(getNeighborhoods());
  }, [dispatch]);

  return (
    <div>
      <TitleStyle>Jugadores</TitleStyle>
      <TopFields>
        <Search>
          <FaSearch onClick={onClickSearch} />
          <input
            onChange={onChangeSearch}
            name="search"
            type="text"
            value={search}
            placeholder="Buscar..."
            autoComplete="off"
          />
        </Search>
        <BtnCreateGame onClick={resetFilters}>Resetear filtros</BtnCreateGame>
      </TopFields>
      <Filter>
        <div>
          <Label>Filtrar por posición: </Label>
          <Select name="" id="" onChange={handleFilterByPosition}>
            <option value="todos">Todas las posiciones</option>
            <option value="delantero">Delantero</option>
            <option value="mediocampista">Mediocampista</option>
            <option value="defensor">Defensor</option>
            <option value="arquero">Arquero</option>
          </Select>
        </div>
        <div>
          <Label>Filtrar por ubicación:</Label>
          <Select name="neighborhood" onChange={handleFilterByNeighborhood}>
            <option value="todos">Todos los barrios</option>
            {neighborhoods.map((element) => (
              <option key={element.id} value={element.name}>
                {element.name}
              </option>
            ))}
          </Select>
        </div>
      </Filter>
      <PlayersDiv>
        {users.length > 0 ? (
          users.map((obj) => <Player key={obj.id} data={obj} />)
        ) : (
          <h4>Cargando...</h4>
        )}
      </PlayersDiv>
    </div>
  );
};

export default Players;
