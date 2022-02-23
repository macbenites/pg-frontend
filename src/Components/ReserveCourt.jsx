import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postBuy } from "../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";
import { InputForm } from "../Styles/reusable/Input";
import Logo from "./Logo";
import {
  CreateDiv,
  BtnCreateGame,
  BtnBack,
} from "../Styles/component/GamesCreate";
import { Name, User, Barrio, Btn } from "../Styles/reusable/Containers";

export default function ReserveCourt() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useParams();
  const { userState } = useSelector((state) => state);
  const [input, setInput] = useState({
    title: name,
  });

  const handle = () => {
    localStorage.setItem("title", input.title);
    localStorage.setItem("price", input.price);
    localStorage.setItem("datetime", input.datetime);
    localStorage.setItem("user", userState.user_name);
  };

  console.log(input);
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postBuy(input));
    handle();
    setInput({
      datetime: "",
    });
  };

  function handleBackClick() {
    navigate("/home/canchas");
  }

  return (
    <div>
      <Logo />
      <CreateDiv>
        <h4>Reservar</h4>
        <BtnBack onClick={(e) => handleBackClick(e)}>Volver</BtnBack>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Name>
            <InputForm type="text" value={name} name="title" readOnly />
          </Name>
          <User>
            <InputForm
              type="number"
              placeholder="Precio"
              name="price"
              onChange={(e) => handleChange(e)}
            />
          </User>
          <Barrio>
            <InputForm
              type="datetime-local"
              placeholder="Fecha y Hora"
              name="datetime"
              onChange={(e) => handleChange(e)}
            />
          </Barrio>
          <Btn>
            <BtnCreateGame primary type="submit">
              Rerservar
            </BtnCreateGame>
          </Btn>
        </form>
      </CreateDiv>
    </div>
  );
}
