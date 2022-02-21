import { FaExclamationCircle } from "react-icons/fa";
import { InputForm, Label } from "../../Styles/reusable/Input";
import { Select } from "../../Styles/reusable/Select";
import { ErrorMessage } from "../../Styles/Login.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signUpWithMail, getNeighborhoods } from "../../Redux/Actions";

import {
  SignInDiv,
  LinkToSignIn,
  BtnSignIn,
} from "../../Styles/component/SignIn";

import {
  Name,
  User,
  Barrio,
  Position,
  Email,
  Password,
  Btn,
} from "../../Styles/reusable/Containers";

function SignIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const neighborhoods = useSelector((state) => state.neighborhoods);

  useEffect(() => {
    dispatch(getNeighborhoods());
  }, [dispatch]);

  const onSubmit = (input) => {
    if (Object.entries(errors).length === 0) {
      dispatch(
        signUpWithMail(input.email, input.password, input, () => {
          navigate("/auth/login");
        })
      );
    }
  };

  return (
    <div>
      <SignInDiv>
        <h4>Creá tu cuenta</h4>
        <h5>
          <LinkToSignIn to="/auth/login"> Ya tenés tu cuenta?</LinkToSignIn>
          <span> o </span>
          <LinkToSignIn business="true" to="/auth/business">
            Eres una empresa?
          </LinkToSignIn>
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Name>
            <Label>Nombre</Label>
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
            <Label>Usuario</Label>
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
            <Label>Barrio</Label>
            <Select
              name="neighborhood"
              {...register("neighborhood", {
                required: {
                  value: true,
                  message: "Barrio requerido.",
                },
              })}
              onKeyUp={() => {
                trigger("neighborhood");
              }}
            >
              <option value="">Barrio</option>
              {neighborhoods.map((element, index) => (
                <option key={index} value={element.name}>
                  {element.name}
                </option>
              ))}
            </Select>
            <ErrorMessage>
              {errors.neighborhood && (
                <small>
                  <FaExclamationCircle /> {errors.neighborhood.message}
                </small>
              )}
            </ErrorMessage>
          </Barrio>
          <Position>
            <Label>Posición</Label>
            <Select
              name="position"
              {...register("position", {
                required: {
                  value: true,
                  message: "Posición requerida.",
                },
              })}
              onKeyUp={() => {
                trigger("position");
              }}
            >
              <option value="">Posicion de juego</option>
              <option value="delantero">Delantero</option>
              <option value="mediocampista">Mediocampista</option>
              <option value="defensor">Defensor</option>
              <option value="arquero">Arquero</option>
            </Select>
            <ErrorMessage>
              {errors.position && (
                <small>
                  <FaExclamationCircle /> {errors.position.message}
                </small>
              )}
            </ErrorMessage>
          </Position>
          <Email>
            <Label>Correo electrónico</Label>
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
            <Label>Contraseña</Label>
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
          <br />
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
