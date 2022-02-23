import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postMatch, authState } from "../Redux/Actions/index";
import { useDispatch } from "react-redux";
import { FaExclamationCircle } from "react-icons/fa";
import { ErrorMessage } from "../Styles/Login.js";
import { InputForm } from "../Styles/reusable/Input";
import Logo from "./Logo";
import {
  CreateDiv,
  BtnCreateGame,
  BtnBack,
} from "../Styles/component/GamesCreate";
import {
  User,
  Barrio,
  Email,
  Btn,
  Position,
} from "../Styles/reusable/Containers";
import Swal from "sweetalert2";

const validationForm = (input) => {
  let errors = {};

  if (input.nameCenter.length === 0) {
    errors.name = "El nombre del club o cancha es requerido.";
  }
  if (!input.players) {
    errors.players = "Cantidad de jugadores requerida";
  } else if (input.players < 2 || input.players > 22) {
    errors.players = "La cantidad de jugadores debe estar entre 2 y 22";
  }
  if (!input.date) {
    errors.date = "Fecha y hora requeridas";
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
    nameCenter: localStorage.getItem("title"),
    players: "",
    date: localStorage.getItem("datetime"),
    note: "",
    price: localStorage.getItem("price"),
    user: localStorage.getItem("user"),
  });

  useEffect(() => {
    dispatch(authState());
  }, [dispatch]);

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
      input.note &&
      !Object.keys(errors).length
    ) {
      console.log("input", input);
      dispatch(postMatch(input));
      localStorage.clear();
      Swal.fire({
        icon: "success",
        title: "Partido creado con éxito!!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/home/games");
      setInput({
        nameCenter: "",
        players: "",
        date: "",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son requeridos!",
      });
    }
  };

  function handleBackClick() {
    navigate("/home/games");
  }

  return (
    <div>
      <Logo />
      <CreateDiv>
        <h4>Crear Partido</h4>
        <BtnBack onClick={(e) => handleBackClick(e)}>Volver</BtnBack>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <InputForm type="text" value={input.price} name="price" readOnly />
          </div>
          <div>
            <InputForm
              type="text"
              value={input.nameCenter}
              name="nameCenter"
              readOnly
            />
          </div>
          <Position>
            <InputForm type="text" value={input.user} name="user" readOnly />
          </Position>
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
          <Barrio>
            <InputForm
              type="datetime-local"
              value={input.date}
              placeholder="Fecha y Hora"
              name="date"
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
