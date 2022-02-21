import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postBuy } from "../Redux/Actions/index";
import { useDispatch } from "react-redux";
import { InputForm } from "../Styles/reusable/Input";
import Logo from "./Logo";
import { CreateDiv, BtnCreateGame } from "../Styles/component/GamesCreate";
import { Name, User, Barrio, Btn } from "../Styles/reusable/Containers";

export default function ReserveCourt() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useParams();
  console.log(name);
  const [input, setInput] = useState({
    datetime: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postBuy(input, navigate));
    // navigate("/home/");
    setInput({
      datetime: "",
    });
  };

  return (
    <div>
      <Logo />
      <CreateDiv>
        <h4>Reservar</h4>
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
              Pagar
            </BtnCreateGame>
          </Btn>
        </form>
      </CreateDiv>
    </div>
  );
}
