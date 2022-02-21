import { useEffect } from "react";
import Player from "./Player";
import {
  Filter,
  PlayersDiv,
  Search
} from "../Styles/component/Players";
import { useDispatch , useSelector } from "react-redux";
import { showUsers, getNeighborhoods } from "../Redux/Actions";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { filterPlayersByPosition , filterPlayersByNeighborhoods } from "../Redux/Actions";


const Players = () => {  
  const dispatch = useDispatch()
  const users = useSelector(obj => obj.users);
  console.log(users)
  const neighborhoods = useSelector((state) => state.neighborhoods);
  useEffect(()=>{
      dispatch(showUsers());
      dispatch(getNeighborhoods());
  },[dispatch]);

  const handleFilterByPosition = (e) => {
    console.log(e.target.value)
    dispatch(filterPlayersByPosition(e.target.value))
  }

  const handleFilterByNeighborhood = (e) => {
    console.log(e.target.value);
    dispatch(filterPlayersByNeighborhoods(e.target.value))
  }

  return (
    <div>
      <br />
      <Filter>
        <Search>
          <FaSearch />
          <input type="text" placeholder="Buscar..." />
        </Search>
        <label>Filtrar por posición: </label>
        <select name="" id="" onClick={handleFilterByPosition}>
          <option value="todos">Todas las posiciones</option>
          <option value="delantero">Delantero</option>
          <option value="mediocampista">Mediocampista</option>
          <option value="defensor">Defensor</option>
          <option value="arquero">Arquero</option>
        </select>
        <label>Filtrar por ubicación:</label>
        <select name="neighborhood" onClick={handleFilterByNeighborhood}>
          <option value= 'todos'>Todos los barrios</option>
            {neighborhoods.map((element) =>(
              <option key= {element.id} value = {element.name}>{element.name}</option>
            ))}
        </select> 
      </Filter>
      <PlayersDiv>
        {users.length > 0 ? users.map((obj) => (
          <Link to={"/users/" + obj.id}>
            <Player key={obj.id} data={obj} />
          </Link>
        )) : 
           <h4>Cargando...</h4> }
      </PlayersDiv>
    </div>
  );
};

export default Players;
