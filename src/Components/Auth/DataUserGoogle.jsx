import { FaExclamationCircle } from "react-icons/fa";
import { InputForm } from "../../Styles/reusable/Input";
import { ErrorMessage } from "../../Styles/Login.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpWithMail, resetStateError, getNeighborhoods } from "../../Redux/Actions";
import Swal from "sweetalert2";

import {
  SignInDiv,
  BtnSignIn,
} from "../../Styles/component/SignIn";

import {
  Name,
  Barrio,
  Position,
  Btn,
} from "../../Styles/reusable/Containers";

function DataUserGoogle() {
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
      dispatch(resetStateError());
      dispatch(
        signUpWithMail(input.email, input.password, input, () => {
          navigate("/auth/login");
        })
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son requeridos!",
      });
    }
  };

  return (
    <div>
      <SignInDiv>
        <h4>Completá tu perfil</h4>
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
          <Barrio>
            <select
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
              <option value= ''>Barrio</option>
                {neighborhoods.map((element) =>(
                  <option key= {element.id} value = {element.name}>{element.name}</option>
                ))}  
            </select>
            <ErrorMessage>
              {errors.neighborhood && (
                <small>
                  <FaExclamationCircle /> {errors.neighborhood.message}
                </small>
              )}
            </ErrorMessage>
          </Barrio>
          <Position>
            <select
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
              <option value="arquero">Arquero</option>
              <option value="defensor">Defensor</option>
              <option value="mediocampista">Mediocampista</option>
              <option value="delantero">Delantero</option>
            </select>
            <ErrorMessage>
              {errors.position && (
                <small>
                  <FaExclamationCircle /> {errors.position.message}
                </small>
              )}
            </ErrorMessage>
          </Position>
          <Btn>
            <BtnSignIn primary type="submit">
              Guardar
            </BtnSignIn>
          </Btn>
        </form>
      </SignInDiv>
    </div>
  );
}

export default DataUserGoogle;