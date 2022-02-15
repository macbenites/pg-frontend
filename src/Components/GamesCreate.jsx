import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postMatch } from "../Redux/Actions/index";
import { useDispatch } from "react-redux";
//import { FaExclamationCircle } from "react-icons/fa";
//import { ErrorMessage } from "../Styles/Login.js";
import { InputForm } from "../Styles/reusable/Input";
import Logo from "./Logo";
import { CreateDiv, BtnCreateGame } from "../Styles/GamesCreate";
import { Name, User, Barrio, Position, Email, Btn } from "../Styles/reusable/Containers";

/*const validationForm = (input) => {
  let errors = {};
  let regexNameCenter = /^[A-Za-z0-9Ã‘Ã±ÃÃ¡Ã‰Ã©ÃÃ­Ã“Ã³ÃšÃºÃœÃ¼\s]+$/;

  if(!input.nameCenter.trim()){
      errors.nameCenter = "El nombre del club o cancha es requerido.";
  }else if(!regexNameCenter.test(input.nameCenter.trim())){
      errors.name = "*The name field only accepts letters and blank spaces";
  };
  if(!input.players){
    errors.players = "Cantidad de jugadores requerida";
  }else if(input.players < 1 || input.players > 22){
    errors.players = "La cantidad de jugadores debe estar entre 1 y 22";
  };
  if(!input.date){
      errors.difficulty = "*Difficulty required";
  } 
  if(!input.distric){
      errors.distric = "Barrio requerido";
  }if(!input.note){
      errors.note = "Observaciones requeridas";
  }  
  return errors;
}*/


export default function GamesCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const [errors, setErrors] = useState({});
  const [input, setInput] = useState({    
    nameCenter: '',
    players: '',
    date: '',
    distric: '',
    note: ''
  })
  

  const handleChange = (e) => {             
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
    console.log(input)
  }  

  const handleSubmit = (e) => {
    e.preventDefault();    
    dispatch(postMatch(input));
    alert("Partido creado con éxito");   
    setInput({
      nameCenter: '',
      players: '',
      date: '',
      distric: ''
    })
    navigate("/home/games");   
  };


  return (
    <div>
      <Logo />
      <CreateDiv>
        <h4>Crear Partido</h4>    
        <form onSubmit= {e => handleSubmit(e)}>          
          <Name>
            <InputForm
              type="text"
              value={input.nameCenter}
              placeholder="Nombre Predio" 
              autoComplete="off"
              name="nameCenter"
              onChange={e => handleChange(e)}
             />                    
          </Name>        
          <User>   
            <InputForm
              type="number"
              value={input.players}
              placeholder="Cantidad de Jugadores" 
              name="players"
              onChange={e => handleChange(e)}
            />           
          </User>
          <Position>
            <InputForm
              type="text"
              value={input.distric}
              placeholder="Barrio" 
              autoComplete="off"
              name="distric"
              onChange={e => handleChange(e)}
            />           
          </Position>
          <Barrio>
          <InputForm
              type="datetime-local"
              value={input.date}
              placeholder="Fecha y Hora" 
              name="date"
              onChange={e => handleChange(e)}
            />           
          </Barrio>
          <Email>
          <InputForm
              type="text"
              value={input.note}
              placeholder="Observaciones" 
              name="note"
              onChange={e => handleChange(e)}
            />            
          </Email>       
          <Btn>
            <BtnCreateGame primary type="submit">Crear partido</BtnCreateGame>
          </Btn>
        </form>  
      </CreateDiv>
    </div>
  );
};