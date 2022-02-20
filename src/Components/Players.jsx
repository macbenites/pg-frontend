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


const Players = () => {  
  const dispatch = useDispatch()
  const users = useSelector(obj => obj.users);
  console.log(users)
  const neighborhoods = useSelector((state) => state.neighborhoods);

  useEffect(()=>{
      dispatch(showUsers());
      dispatch(getNeighborhoods());
  },[dispatch]);

  return (
    <div>
      <br />
      <Filter>
        <label>Usuario</label>
        <Search>
          <FaSearch />
          <input type="text" placeholder="Buscar..." />
        </Search>
        <label>Posición</label>
        <select name="" id="">
          <option value="">Delantero</option>
          <option value="">Mediocampista</option>
          <option value="">Defensor</option>
          <option value="">Arquero</option>
        </select>
        <label>Ubicación</label>
        <select name="neighborhood">
          <option value= ''>Seleccione el barrio</option>
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
