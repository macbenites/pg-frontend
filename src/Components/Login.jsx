import React from "react";
import Logo from "./Logo";
import {
  LoginDiv,
  BtnGoogle,
  BtnLogIn,
  BtnFacebook,
  BtnApple,
  ErrorMessage,
} from "../Styles/Login.js";
import { InputUser, InputPassword } from "../Styles/reusable/ContainerInput";
import { InputForm } from "../Styles/reusable/Input";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //742910100228-bf1uk5tddd041i1fvd8bjcg77fk7qkmo.apps.googleusercontent.com
  // credencial google
  //658093002098339 -- creedencial Facebook

  const onSubmit = (event) => {
    console.log(event);
    // event.target.reset();
    reset();
  };

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const componentClicked = () => {
    console.log("logueado");
  };

  return (
    <div>
      <Logo />
      <LoginDiv>
        <h4>Ingresa a tu cuenta</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputUser>
            <InputForm
              type="text"
              name="username"
              placeholder="Usuario"
              autoComplete="off"
              {...register("username", {
                required: {
                  value: true,
                  message: "** Campo requerido",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_-]{4,20}$/,
                  message: "** El formato del usuario ingresado no es correcto",
                },
              })}
            />
            <ErrorMessage>{errors?.username?.message}</ErrorMessage>
          </InputUser>
          <InputPassword>
            <InputForm
              type="password"
              name="password"
              placeholder="Contraseña"
              {...register("password", {
                required: {
                  value: true,
                  message: "** Campo requerido",
                },
                pattern: {
                  value: /^.{6,12}$/,
                  message:
                    "** La contraseña debe contener entre 4 y 12 caracteres",
                },
              })}
              autoComplete="off"
            />
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          </InputPassword>
          <BtnLogIn primary type="submit">
            Ingresar
          </BtnLogIn>
          <span>/</span>
          <BtnGoogle>
            <GoogleLogin
              clientId="742910100228-bf1uk5tddd041i1fvd8bjcg77fk7qkmo.apps.googleusercontent.com"
              buttonText="Ingresar con Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </BtnGoogle>
          <BtnFacebook>
            <FacebookLogin
              appId="658093002098339"
              autoLoad={false}
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook}
              icon="fa-facebook"
              textButton="Ingresa con facebook"
            />
          </BtnFacebook>
          <BtnApple type="button">Apple</BtnApple>
        </form>
      </LoginDiv>
    </div>
  );
}
