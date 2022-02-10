import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaGoogle,
  FaApple,
  FaExclamationCircle,
} from "react-icons/fa";
import Logo from "./Logo";
import {
  LoginDiv,
  BtnLogIn,
  ErrorMessage,
  ContainerInput,
  BtnSignIn,
  Bar,
  LinkToLogin,
} from "../Styles/Login.js";
import { InputForm } from "../Styles/reusable/Input";
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
    trigger,
    formState: { errors },
  } = useForm();
  //742910100228-bf1uk5tddd041i1fvd8bjcg77fk7qkmo.apps.googleusercontent.com
  // credencial google
  //658093002098339 -- creedencial Facebook

  const { logIn, logInWithGoogle, logInWithFacebook } = useContext(context);

  const onSubmit = async (event) => {
    try {
      await logIn(auth, event.email, event.password);
      navigate("/home");
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogIn = async () => {
    const googleData = await logInWithGoogle();
    console.log("Data google: " ,googleData)
    navigate('/home');
  }

  const facebookLogIn = async () => {
    const facebookData = await logInWithFacebook();
    console.log("Data facebook: " , facebookData)
    navigate('/home');
  }

  const newPassword = () => {
    navigate("/resetPassword");
  };

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
              onKeyUp={() => {
                trigger("email");
              }}
            />
            <ErrorMessage>
              <ErrorMessage>
                {errors.email && (
                  <small>
                    <FaExclamationCircle /> {errors.email.message}
                  </small>
                )}
              </ErrorMessage>
            </ErrorMessage>
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
              onKeyUp={() => {
                trigger("password");
              }}
            />
            <ErrorMessage>
              {errors.password && (
                <small>
                  <FaExclamationCircle /> {errors.password.message}
                </small>
              )}
            </ErrorMessage>
            <BtnLogIn primary type="submit">
              Ingresar
            </BtnLogIn>
          </ContainerInput>
          <Bar>/</Bar>
          <ContainerInput>
            <BtnSignIn onClick={googleLogIn}>
              <FaGoogle /> Ingresar con Google
            </BtnSignIn>
            <BtnSignIn onClick={facebookLogIn}>
              <FaFacebookF /> Ingresar con Facebook
            </BtnSignIn>
            <BtnSignIn>
              <FaApple /> Ingresar con Apple
            </BtnSignIn>
          </ContainerInput>
        </form>
        <br />
        <LinkToLogin to="/resetPassword" onClick={newPassword}>
          {" "}
          Olvidaste tu contraseña?
        </LinkToLogin>
      </LoginDiv>
    </div>
  );
}
