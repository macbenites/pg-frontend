import React from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "./Logo";
import {
  LoginDiv,
  BtnGoogle,
  BtnLogIn,
  BtnFacebook,
  BtnApple,
  ErrorMessage,
  ContainerInput,
  Bar,
  Error,
  LinkToLogin
} from "../Styles/Login.js";
import { InputForm } from "../Styles/reusable/Input";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { useForm } from "react-hook-form";
import { context } from "../Context/authContext";
import { useContext } from "react";
import { auth } from "../firebase";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //742910100228-bf1uk5tddd041i1fvd8bjcg77fk7qkmo.apps.googleusercontent.com
  // credencial google
  //658093002098339 -- creedencial Facebook

  const {logIn , logInWithGoogle , logInWithFacebook} = useContext(context);

  const onSubmit = async (event) => {
    console.log(event);
    try {
      await logIn(auth , event.email , event.password)
      navigate('/home')
      reset();
    } catch (error) {
      console.log(error)
    }
  };

  const googleLogIn = async () => {
    const googleData = await logInWithGoogle();
    console.log(googleData)
    navigate('/home');
  }

  const facebookLogIn = async () => {
    const facebookData = await logInWithFacebook();
    console.log(facebookData)
    navigate('/home');
  }

  console.log(errors);
  return (
    <div>
      <Logo />
      <LoginDiv>
      <h4>Ingresá a tu cuenta</h4>
      <h5>
          No tenés cuenta?<LinkToLogin to="/signin"> Registrate</LinkToLogin>
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContainerInput>
            <InputForm
              type="email"
              autoComplete="off"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email requerido",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "El formato del email ingresado no es correcto",
                },
              })}
            />
            {/* <ErrorMessage>{errors?.username?.message}</ErrorMessage> */}
            <InputForm
              type="password"
              name="password"
              placeholder="Contraseña"
              {...register("password", {
                required: {
                  value: true,
                  message: "Contraseña requerida",
                },
                pattern: {
                  value: /^.{6,12}$/,
                  message:
                    "La contraseña debe contener entre 6 y 12 caracteres",
                },
              })}
              autoComplete="off"
            />
            {/* <ErrorMessage>{errors?.password?.message}</ErrorMessage> */}

            <BtnLogIn primary type="submit">
              Ingresar
            </BtnLogIn>
          </ContainerInput>
          <Bar>/</Bar>
          <ContainerInput>
            <BtnGoogle><button onClick={googleLogIn}>Google LogIn</button></BtnGoogle>
            <BtnFacebook onClick={facebookLogIn}><button>Facebook LogIn</button></BtnFacebook>
            <BtnApple type="button">Apple</BtnApple>
          </ContainerInput>
        </form>
        <br />
        {Object.entries(errors).length > 0 && (
          <Error>
            <ErrorMessage>{errors?.email?.message}</ErrorMessage>
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          </Error>
        )}
      </LoginDiv>
    </div>
  );
}
