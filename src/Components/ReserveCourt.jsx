import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { postBuy } from "../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";
import { InputForm, Label } from "../Styles/reusable/Input";
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
  const [params] = useSearchParams();
  const nameCenter = params.get("nameCenter");
  const price = params.get("price");

  const { userState } = useSelector((state) => state);
  const [input, setInput] = useState({
    title: nameCenter,
    price: price,
  });

  const handle = () => {
    localStorage.setItem("title", input.title);
    localStorage.setItem("price", input.price);
    localStorage.setItem("datetime", input.datetime);
    localStorage.setItem("user", userState.user_name);
  };

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
  };

  function handleBackClick() {
    navigate("/home/canchas");
  }

  return (
    <div>
      <Logo />
      <CreateDiv>
        <h4>Haz tu Reserva</h4>
        <BtnBack onClick={(e) => handleBackClick(e)}>Volver</BtnBack>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Name>
            <Label>Lugar</Label>
            <InputForm type="text" value={nameCenter} name="title" readOnly />
          </Name>
          <User>
            <Label>Precio</Label>
            <InputForm
              type="number"
              name="price"
              value={price}
              onChange={(e) => handleChange(e)}
            />
          </User>
          <Barrio>
            <Label>Fecha y Hora</Label>
            <InputForm
              type="datetime-local"
              placeholder="Fecha y Hora"
              name="datetime"
              onChange={(e) => handleChange(e)}
            />
          </Barrio>
          <Btn>
            <BtnCreateGame primary type="submit">
              Reservar
            </BtnCreateGame>
          </Btn>
        </form>
      </CreateDiv>
    </div>
  );
}
