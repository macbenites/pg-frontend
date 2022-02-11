//import { useState } from "react";
import { BtnCreateGame } from "../Styles/Games";
import { FaExclamationCircle } from "react-icons/fa";
import { ErrorMessage } from "../Styles/Login.js";
import { useForm } from "react-hook-form";
import { InputForm } from "../Styles/reusable/Input";


export default function GamesCreate() {
  //const [selectedDate, setSelectedDate] = useState(new Date());
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
      reset();
    } else {
      alert("Completar los campos requeridos");
    }
  };

  return (
    <div>
      <h4>Partidos</h4>
         
      <form onSubmit={handleSubmit(onSubmit)}>
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
              value: 32,
              message: "La cantidad de jugadores no puede superar los 32.",
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



        <BtnCreateGame>Crear Partido</BtnCreateGame>
      </form>  
      {/*</InputGamesStyle>*/}
    </div>
  );
};