//import { useEffect } from "react"
import data from "../Utils/datos.json"
import Player from "./Player";
import NavBar from "./NavBar";
import { HomeContent } from "../Styles/Home";
import { Filter , ButtonFiltrar , FilterButtom , PlayersDiv } from "../Styles/Players";
import Logo from "./Logo";

const Players = () => {

    console.log(data.usuario);

    return(
        <div>
            <Logo/>
            <br />
            <ButtonFiltrar>
                <h2>Los convocados</h2>
                <FilterButtom>Filtros</FilterButtom>
            </ButtonFiltrar>
            <Filter>
                <HomeContent>
                    <NavBar />
                </HomeContent>
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
                { data.usuario.map(obj =>
                    <Player key={obj.nombre} data={obj} />
                )}
            </PlayersDiv>
        </div>
    )
}

export default Players