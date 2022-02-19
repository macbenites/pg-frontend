import React from "react";
import CardsGames from "./CardsGames";
import { getMatches, getFields, getNeighborhoods } from "../Redux/Actions/index";
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
  BtnCreateGame
} from "../Styles/component/Games";

function Games() {  
  const allMatches = useSelector((state) => state.matches)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(allMatches);
  const fields = useSelector((state) => state.fields);
  const neighborhoods = useSelector((state) => state.neighborhoods);

  useEffect(() => {
    dispatch(getMatches());
    dispatch(getFields());
    dispatch(getNeighborhoods());
  }, [dispatch]);

  function handleClick(){
    navigate('/gamesCreate')
  };

  return (
    <div>
      <TitleStyle>Partidos</TitleStyle>
      <BtnCreateGame onClick={e => handleClick(e)}>Crear partido</BtnCreateGame>
      <SelectLocation>
        <option value= ''>Lugar</option>
        {fields.map((element) =>(
          <option key = {element.id} value = {element.name}>{element.name}</option>
        ))}
      </SelectLocation>
      <SelectDate>
        <option>Fecha y Hora</option>
      </SelectDate>
      <SelectSearch>
        <option value= ''>Barrio</option>
          {neighborhoods.map((element) =>(
            <option key= {element.id} value = {element.name}>{element.name}</option>
          ))}
      </SelectSearch>
      <CardsGamesStyle>
        {allMatches && allMatches.map((el, index) => (
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
};

export default Games;
