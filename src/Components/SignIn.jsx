import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { SignInDiv, LinkToSignIn, BtnSignIn } from "../Styles/SignIn";
import { InputForm } from "../Styles/reusable/Input";
import {
  InputUser,
  InputName,
  InputBarrio,
  InputPosition,
  InputEmail,
  InputPassword,
} from "../Styles/reusable/ContainerInput";
function SignIn() {
  // const dispatch = useDispatch()
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    username: "",
    neighborhood: "",
    position: "",
    email: "",
    password: "",
  });

  function handleClick(e) {
    if (input.name.length === 0) {
      alert("Complete su nombre antes de crear la cuenta");
      e.preventDefault();
    } else if (input.username.length === 0) {
      alert("Complete su usuario antes de crear la cuenta");
      e.preventDefault();
    } else if (input.neighborhood.length === 0) {
      alert("Complete su barrio antes de crear la cuenta");
      e.preventDefault();
    } else if (input.position.length === 0) {
      alert("Complete su posición antes de crear la cuenta");
      e.preventDefault();
    } else if (input.email.length === 0) {
      alert("Complete su mail antes de crear la cuenta");
      e.preventDefault();
    } else if (input.password.length === 0) {
      alert("Complete su contraseña antes de crear la cuenta");
      e.preventDefault();
    } else {
      e.preventDefault();
      // dispatch(createAccount(input));
      alert("Cuenta creada con éxito");
      navigate("/home");
    }
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <Logo />
      <SignInDiv>
        <h4>Creá tu cuenta</h4>
        <h5>
          Ya tenes tu cuenta?<LinkToSignIn to="/login"> Log In</LinkToSignIn>
        </h5>
        <form>
          <InputName>
            <InputForm
              type="text"
              autoComplete="off"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
              placeholder="Nombre"
            />
          </InputName>
          <InputUser>
            <InputForm
              type="text"
              autoComplete="off"
              value={input.username}
              name="username"
              onChange={(e) => handleChange(e)}
              placeholder="Usuario"
            />
          </InputUser>
          <InputBarrio>
            <InputForm
              type="text"
              autoComplete="off"
              value={input.neighborhood}
              name="neighborhood"
              onChange={(e) => handleChange(e)}
              placeholder="Barrio"
            />
          </InputBarrio>
          <InputPosition>
            <InputForm
              type="text"
              autoComplete="off"
              value={input.position}
              name="position"
              onChange={(e) => handleChange(e)}
              placeholder="Posición"
            />
          </InputPosition>
          <InputEmail>
            <InputForm
              type="email"
              autoComplete="off"
              value={input.email}
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="Email"
            />
          </InputEmail>
          <InputPassword>
            <InputForm
              type="password"
              autoComplete="off"
              value={input.password}
              name="password"
              onChange={(e) => handleChange(e)}
              placeholder="Contraseña"
            />
          </InputPassword>
          <BtnSignIn
            primary
            type="submit"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Crear cuenta
          </BtnSignIn>
        </form>
      </SignInDiv>
    </div>
  );
}

export default SignIn;
