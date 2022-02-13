import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postMatch } from "../Redux/Actions/index";
import { useDispatch } from "react-redux";
import { FaExclamationCircle } from "react-icons/fa";
import { ErrorMessage } from "../Styles/Login.js";
import { useForm } from "react-hook-form";
import { InputForm } from "../Styles/reusable/Input";
import Logo from "./Logo";
import { CreateDiv, BtnCreateGame } from "../Styles/GamesCreate";
import { Name, User, Barrio, Position, Btn } from "../Styles/reusable/Containers";


export default function GamesCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    nameCenter: '',
    players: '',
    date: '',
    distric: ''
  })
  
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {              
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
  }  

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.nameCenter && input.players && input.date && input.distric && !Object.keys(errors).length) {
      dispatch(postMatch(input));
      alert("Partido creado con éxito");
      navigate("/home/games");
      setInput({
        nameCenter: '',
        players: '',
        date: '',
        distric: ''
        })
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
              placeholder="Nombre Predio" 
              autoComplete="off"
              name="nameCenter"
              onChange={handleChange}
              {...register("nameCenter", {
                required: {
                  value: true,
                  message: "El nombre del club o cancha es requerido.",
                },
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ0-9\u00f1\u00d1\s]+$/,
                  message: "El nombre del club o cancha no admite caracteres especiales",
                },
                minLength: {
                  value: 4,
                  message: "El nombre del club o cancha debe contener mínimo 3 caracteres.",
                },
                maxLength: {
                  value: 100,
                  message: "El nombre del club o cancha debe contener máximo 100 caracteres.",
                },
              })}
              onKeyUp={() => {
                trigger("nameCenter");
              }}
            />
            <ErrorMessage>
              {errors.nameCenter && (
                <small>
                  <FaExclamationCircle /> {errors.nameCenter.message}
                </small>
              )}
            </ErrorMessage>        
          </Name>        
          <User>   
            <InputForm
              type="number"
              placeholder="Cantidad de Jugadores" 
              name="players"
              onChange={handleChange}
              {...register("players", {
                required: {
                  value: true,
                  message: "Cantidad de jugadores requerida.",
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
                trigger("players");
              }}
            />        
            <ErrorMessage>
              {errors.players && (
                <small>
                  <FaExclamationCircle /> {errors.players.message}
                </small>
              )}
            </ErrorMessage>
          </User>
          <Position>
            <InputForm
              type="text"
              placeholder="Barrio" 
              autoComplete="off"
              name="distric"
              onChange={handleChange}
              {...register("distric", {
                required: {
                  value: true,
                  message: "Barrio requerido.",
                },
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/,
                  message:
                    "El barrio solo admite letras y espacios en blanco.",
                },
              })}
              onKeyUp={() => {
                trigger("distric");
              }}
            />
            <ErrorMessage>
              {errors.distric && (
                <small>
                  <FaExclamationCircle /> {errors.distric.message}
                </small>
              )}
            </ErrorMessage>
          </Position>
          <Barrio>
          <InputForm
              type="datetime-local"
              placeholder="Fecha y Hora" 
              name="date"
              onChange={handleChange}
              {...register("date", {
                required: {
                  value: true,
                  message: "Fecha y Hora requeridas.",
                },
              })}
              onKeyUp={() => {
                trigger("date");
              }}
            />        
            <ErrorMessage>
              {errors.date && (
                <small>
                  <FaExclamationCircle /> {errors.date.message}
                </small>
              )}
              </ErrorMessage>
          </Barrio>       
          <Btn>
            <BtnCreateGame primary type="submit">Crear partido</BtnCreateGame>
          </Btn>
        </form>  
      </CreateDiv>
    </div>
  );
};