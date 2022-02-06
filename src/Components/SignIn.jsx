import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { SignInDiv, LinkToSignIn, BtnSignIn } from "../Styles/SignIn";
import { InputForm } from "../Styles/reusable/Input";
// import { ErrorMessage, Error } from "../Styles/Login.js";
import { context } from "../Context/authContext";
import { useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

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
      createUserWithEmailAndPassword(auth , input.email , input.password)
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
        {/* {Object.entries(errors).length > 0 && (
          <Error>
            <ErrorMessage>{errors?.username?.message}</ErrorMessage>
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          </Error>
        )} */}
        <form>
          <div>
            <InputForm
              type="text"
              autoComplete="off"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
              placeholder="Nombre"
            />
            <InputForm
              type="text"
              autoComplete="off"
              value={input.username}
              name="username"
              onChange={(e) => handleChange(e)}
              placeholder="Usuario"
            />
          </div>
          <div>
            <InputForm
              type="text"
              autoComplete="off"
              value={input.neighborhood}
              name="neighborhood"
              onChange={(e) => handleChange(e)}
              placeholder="Barrio"
            />
            <InputForm
              type="text"
              autoComplete="off"
              value={input.position}
              name="position"
              onChange={(e) => handleChange(e)}
              placeholder="Posición"
            />
          </div>
          <InputForm
            type="email"
            autoComplete="off"
            value={input.email}
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="Email"
          />
          <InputForm
            type="password"
            autoComplete="off"
            value={input.password}
            name="password"
            onChange={(e) => handleChange(e)}
            placeholder="Contraseña"
          />
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
