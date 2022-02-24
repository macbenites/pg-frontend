import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postBuy } from "../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";
import { InputForm, Label } from "../Styles/reusable/Input";
//import { DateTimePicker } from '@material-ui/pickers';
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
  //const [dateSelected, setDateSelected] =  useState(new Date());
  const [input, setInput] = useState({
    title: name,
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
    setInput({
      datetime: "",
    });
  };
  console.log(input)
  

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
            <InputForm type="text" value={name} name="title" readOnly />
          </Name>
          <User>
            <Label>Precio</Label>
            <InputForm
              type="number"
              name="price"
              onChange={(e) => handleChange(e)}
            />
          </User>
          <Barrio>
            {/*<Label>Fecha y Hora</Label>
            <DateTimePicker
              value={dateSelected}
              onChange={setDateSelected}
              minDate={dateSelected}
              format='dd/MM/yyyy - hh:mm'
            />*/}
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
