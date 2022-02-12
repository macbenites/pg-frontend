import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";
import { ErrorMessage } from "../Styles/Login.js";
import { useForm } from "react-hook-form";
import { InputForm } from "../Styles/reusable/Input";
import { DateTimePicker } from "@material-ui/pickers";
import Logo from "./Logo";
import { CreateDiv, BtnCreateGame } from "../Styles/GamesCreate";
import { Name, User, Barrio, Position, Btn } from "../Styles/reusable/Containers";
//import TextField from '@mui/material/TextField';
//import DateTimePicker from '@mui/lab/DateTimePicker';

export default function GamesCreate() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (input) => {
    if (!Object.keys(errors).length) {
      alert("Partido creado con éxito");
      navigate("/home/games");
      reset();
    } else {
      alert("Completar los campos requeridos");
    }
  };

  return (
    <div>
      <Logo />
      <CreateDiv>
      <h4>Crear Partido</h4>    
      <form onSubmit={handleSubmit(onSubmit)}>
        <Name>
          <InputForm
            type="text"
            placeholder="Lugar" 
            autoComplete="off"
            name="place"
            {...register("place", {
              required: {
                value: true,
                message: "Lugar requerido.",
              },
              pattern: {
                value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/,
                message: "El lugar solo admite letras y espacios en blanco.",
              },
              minLength: {
                value: 4,
                message: "El lugar debe contener mínimo 3 caracteres.",
              },
              maxLength: {
                value: 100,
                message: "El lugar debe contener máximo 100 caracteres.",
              },
            })}
            onKeyUp={() => {
              trigger("place");
            }}
          />
          <ErrorMessage>
            {errors.place && (
              <small>
                <FaExclamationCircle /> {errors.place.message}
              </small>
            )}
          </ErrorMessage>        
        </Name>        
        <User>   
          <InputForm
            type="number"
            placeholder="Cantidad de Jugadores" 
            name="cantplayers"
            {...register("cantplayers", {
              required: {
                value: true,
                message: "Cantidad requerida.",
              },
              min: {
                value: 1,
                message: "La cantidad debe ser de al menos 1 jugador.",
              },
              max: {
                value: 22,
                message: "La cantidad de jugadores no puede superar los 22.",
              },
            })}
            onKeyUp={() => {
              trigger("cantplayers");
            }}
          />        
          <ErrorMessage>
            {errors.cantplayers && (
              <small>
                <FaExclamationCircle /> {errors.cantplayers.message}
              </small>
            )}
          </ErrorMessage>
        </User>
        <Position>
          <InputForm
            type="text"
            placeholder="Posicion solicitada" 
            autoComplete="off"
            name="position"
            {...register("position", {
              required: {
                value: true,
                message: "Posición requerida.",
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message:
                  "La posición no admite números, caracteres especiales ni espacios en blanco.",
              },
            })}
            onKeyUp={() => {
              trigger("position");
            }}
          />
          <ErrorMessage>
            {errors.position && (
              <small>
                <FaExclamationCircle /> {errors.position.message}
              </small>
            )}
          </ErrorMessage>
        </Position>

        
          {/*<DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Fecha y Hora"
            value={selectedDate}
            onChange={(newValue) => {
              setSelectedDate(newValue);
            }}
          />*/}
        

        <Barrio>
          <DateTimePicker             
            value={selectedDate} 
            onChange={setSelectedDate} 
            //format="dd/MM/yyy"
            label="Fecha y Hora"                      
          />
        </Barrio>
               
        
        <Btn>
          <BtnCreateGame primary type="submit">Crear partido</BtnCreateGame>
        </Btn>
      </form>  
      </CreateDiv>
    </div>
  );
};