import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postMatch } from "../Redux/Actions/index";
import { useDispatch } from "react-redux";
import { FaExclamationCircle } from "react-icons/fa";
import { ErrorMessage } from "../Styles/Login.js";
import { InputForm } from "../Styles/reusable/Input";
import Logo from "./Logo";
import { CreateDiv, BtnCreateGame } from "../Styles/component/GamesCreate";
import {
  Name,
  User,
  Barrio,
  Position,
  Email,
  Btn,
} from "../Styles/reusable/Containers";
import Swal from "sweetalert2";

const validationForm = (input) => {
  let errors = {};
  let regexNameCenter = /^[A-Za-z0-9Ã‘Ã±ÃÃ¡Ã‰Ã©ÃÃ­Ã“Ã³ÃšÃºÃœÃ¼\s]+$/;

  if (!input.nameCenter.trim()) {
    errors.nameCenter = "El nombre del club o cancha es requerido.";
  } else if (!regexNameCenter.test(input.nameCenter.trim())) {
    errors.name = "El nombre del club o cancha no admite caracteres especiales";
  }
  if (!input.players) {
    errors.players = "Cantidad de jugadores requerida";
  } else if (input.players < 2 || input.players > 22) {
    errors.players = "La cantidad de jugadores debe estar entre 2 y 22";
  }
  if (!input.date) {
    errors.date = "Fecha y hora requeridas";
  }
  if (!input.distric) {
    errors.distric = "Barrio requerido";
  }
  if (!input.note) {
    errors.note = "Observaciones requeridas";
  }
  return errors;
};

export default function GamesCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    nameCenter: "",
    players: "",
    date: "",
    distric: "",
    note: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validationForm({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validationForm(input));
    if (
      input.nameCenter &&
      input.players &&
      input.date &&
      input.distric &&
      input.note &&
      !Object.keys(errors).length
    ) {
      dispatch(postMatch(input));
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Partido creado con éxito!!",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/home/games");
      setInput({
        nameCenter: "",
        players: "",
        date: "",
        distric: "",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son requeridos!",
      });
    }
  };

  return (
    <div>
      <Logo />
      <CreateDiv>
        <h4>Crear Partido</h4>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Name>
            <InputForm
              type="text"
              value={input.nameCenter}
              placeholder="Nombre Predio"
              autoComplete="off"
              name="nameCenter"
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage>
              {errors.nameCenter && (
                <small>
                  <FaExclamationCircle /> {errors.nameCenter}
                </small>
              )}
            </ErrorMessage>
          </Name>
          <User>
            <InputForm
              type="number"
              value={input.players}
              placeholder="Cantidad de Jugadores"
              name="players"
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage>
              {errors.players && (
                <small>
                  <FaExclamationCircle /> {errors.players}
                </small>
              )}
            </ErrorMessage>
          </User>
          <Position>
            <InputForm
              type="text"
              value={input.distric}
              placeholder="Barrio"
              autoComplete="off"
              name="distric"
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage>
              {errors.distric && (
                <small>
                  <FaExclamationCircle /> {errors.distric}
                </small>
              )}
            </ErrorMessage>
          </Position>
          <Barrio>
            <InputForm
              type="datetime-local"
              value={input.date}
              placeholder="Fecha y Hora"
              name="date"
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage>
              {errors.date && (
                <small>
                  <FaExclamationCircle /> {errors.date}
                </small>
              )}
            </ErrorMessage>
          </Barrio>
          <Email>
            <InputForm
              type="text"
              value={input.note}
              placeholder="Observaciones"
              name="note"
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage>
              {errors.note && (
                <small>
                  <FaExclamationCircle /> {errors.note}
                </small>
              )}
            </ErrorMessage>
          </Email>
          <Btn>
            <BtnCreateGame primary type="submit">
              Crear partido
            </BtnCreateGame>
          </Btn>
        </form>
      </CreateDiv>
    </div>
  );
}
