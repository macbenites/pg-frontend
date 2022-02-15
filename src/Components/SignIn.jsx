import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { SignInDiv, LinkToSignIn, BtnSignIn } from "../Styles/SignIn";
import { FaExclamationCircle } from "react-icons/fa";
import { InputForm } from "../Styles/reusable/Input";
import { ErrorMessage } from "../Styles/Login.js";
import { useForm } from "react-hook-form";
import {
  Name,
  User,
  Barrio,
  Position,
  Email,
  Password,
  Btn,
} from "../Styles/reusable/Containers";
import { useDispatch, useSelector } from "react-redux";
import { signUpWithMail, resetStateError } from "../Redux/Actions";

function SignIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  const { error } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSubmit = (input) => {
    if (Object.entries(errors).length === 0) {
      dispatch(resetStateError());
      dispatch(
        signUpWithMail(input.email, input.password, input, () => {
          navigate("/login");
        })
        /* .then(obj => {
          return {
            ...obj,
            username : input.username,
            name : input.name,
            barrio : input.neighborhood,
            posicion : input.position
          }
        }) */
      );
    } else {
      alert("Completar los campos requeridos");
    }
  };

  return (
    <div>
      <Logo />
      <SignInDiv>
        <h4>Creá tu cuenta</h4>
        <h5>
          {error && <h2>{error}</h2>}
          Ya tenés tu cuenta?<LinkToSignIn to="/login"> Log In</LinkToSignIn>
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Name>
            <InputForm
              type="text"
              autoComplete="off"
              placeholder="Nombre"
              name="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Nombre requerido.",
                },
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/,
                  message: "El nombre solo admite letras y espacios en blanco.",
                },
                minLength: {
                  value: 3,
                  message: "El nombre debe contener mínimo 3 caracteres.",
                },
              })}
              onKeyUp={() => {
                trigger("name");
              }}
            />
            <ErrorMessage>
              {errors.name && (
                <small>
                  <FaExclamationCircle /> {errors.name.message}
                </small>
              )}
            </ErrorMessage>
          </Name>
          <User>
            <InputForm
              type="text"
              autoComplete="off"
              name="username"
              placeholder="Usuario"
              {...register("username", {
                onBlur: (e) => console.log(e),
                required: {
                  value: true,
                  message: "Usuario requerido.",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_-]+$/,
                  message: "El usuario sólo admite letras y números.",
                },
                maxLength: {
                  value: 10,
                  message: "El usuario debe contener máximo 10 caracteres.",
                },
                minLength: {
                  value: 4,
                  message: "El usuario debe contener mínimo 3 caracteres.",
                },
              })}
              onKeyUp={() => {
                trigger("username");
              }}
            />
            <ErrorMessage>
              {errors.username && (
                <small>
                  <FaExclamationCircle /> {errors.username.message}
                </small>
              )}
            </ErrorMessage>
          </User>
          <Barrio>
            <InputForm
              type="text"
              autoComplete="off"
              name="neighborhood"
              placeholder="Barrio"
              {...register("neighborhood", {
                required: {
                  value: true,
                  message: "Barrio requerido.",
                },
                pattern: {
                  value: /^[A-Za-zÃ‘Ã±ÃÃ¡Ã‰Ã©ÃÃ­Ã“Ã³ÃšÃºÃœÃ¼\s]+$/,
                  message: "El barrio solo admite letras y espacios en blanco.",
                },
              })}
              onKeyUp={() => {
                trigger("neighborhood");
              }}
            />
            <ErrorMessage>
              {errors.neighborhood && (
                <small>
                  <FaExclamationCircle /> {errors.neighborhood.message}
                </small>
              )}
            </ErrorMessage>
          </Barrio>
          <Position>
            <InputForm
              type="text"
              autoComplete="off"
              name="position"
              placeholder="Posición"
              {...register("position", {
                required: {
                  value: true,
                  message: "Posición requerida.",
                },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message:
                    "La posición no admite números, caracteres especiales ni espacios en blanco.",
                },
              })}
              onKeyUp={() => {
                trigger("position");
              }}
            />
            <ErrorMessage>
              {errors.position && (
                <small>
                  <FaExclamationCircle /> {errors.position.message}
                </small>
              )}
            </ErrorMessage>
          </Position>
          <Email>
            <InputForm
              type="email"
              autoComplete="off"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email requerido.",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "El formato del email ingresado no es correcto.",
                },
              })}
              onKeyUp={() => {
                trigger("email");
              }}
            />
            <ErrorMessage>
              {errors.email && (
                <small>
                  <FaExclamationCircle /> {errors.email.message}
                </small>
              )}
            </ErrorMessage>
          </Email>
          <Password>
            <InputForm
              type="password"
              autoComplete="off"
              name="password"
              placeholder="Contraseña"
              {...register("password", {
                required: {
                  value: true,
                  message: "Contraseña requerida.",
                },
                pattern: {
                  value: /^.{6,12}$/,
                  message:
                    "La contraseña debe contener entre 6 y 12 caracteres.",
                },
              })}
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
          </Password>
          <Btn>
            <BtnSignIn primary type="submit">
              Crear cuenta
            </BtnSignIn>
          </Btn>
        </form>
      </SignInDiv>
    </div>
  );
}

export default SignIn;
