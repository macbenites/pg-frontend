import { useEffect } from "react"
import Player from "./Player";
import {
  Filter,
  ButtonFiltrar,
  FilterButtom,
  PlayersDiv,
} from "../Styles/component/Players";
import { useDispatch , useSelector } from "react-redux";
import { showUsers } from "../Redux/Actions";
import { Link } from "react-router-dom";


const Players = () => {
  
  const dispatch = useDispatch()
  const users = useSelector(obj => obj.users)
  console.log(users)

  useEffect(()=>{

      dispatch(showUsers());

  },[dispatch])

  return (
    <div>
      <br />
      <ButtonFiltrar>
        <h2>Los convocados</h2>
        <FilterButtom>Filtros</FilterButtom>
      </ButtonFiltrar>
      <Filter>
        <label htmlFor="">Usuario</label>
        <input type="text" placeholder="Search..." />
        <label htmlFor="">Posición</label>
        <select name="" id="">
          <option value="">Delantero</option>
          <option value="">Mediocampista</option>
          <option value="">Defensor</option>
          <option value="">Arquero</option>
        </select>
        <label htmlFor="">Ubicación</label>
        <select name="" id="">
          <option value="">Palermo</option>
          <option value="">Flores</option>
          <option value="">Caballito</option>
          <option value="">Almegro</option>
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
