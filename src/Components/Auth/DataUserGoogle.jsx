import { FaExclamationCircle } from "react-icons/fa";
import { InputForm } from "../../Styles/reusable/Input";
import { Select } from "../../Styles/reusable/Select";
import { ErrorMessage } from "../../Styles/Login.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateData,
  resetStateError,
  getNeighborhoods,
} from "../../Redux/Actions";
import Swal from "sweetalert2";
import { collection, getDocs /* updateDoc */ } from "firebase/firestore";
import { db } from "../../firebase";

import { SignInDiv, BtnSignIn } from "../../Styles/component/SignIn";

import {
  Name,
  Barrio,
  Position,
  Btn,
  User,
} from "../../Styles/reusable/Containers";

function DataUserGoogle() {
  const [mensajes, setMensajes] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const neighborhoods = useSelector((state) => state.neighborhoods);
  const currentUser = useSelector((state) => state.userState);
  const users = useSelector((state) => state.users);
  const userLogueado = useSelector((state) => state.userState);
  useEffect(() => {
    function getMensajes(user) {
      let mensajesLimpios = [];
      let viendoMensajes = [];
      const arr = user.map(async (obj) => {
        const collectionRef = collection(db, "mensajes/chat/" + obj.email);
        const mensajesCifrados = await getDocs(collectionRef);
        mensajesCifrados.forEach((obj2) => {
          let data = obj2.data();
          return viendoMensajes.push(data);
        });
        if (viendoMensajes.length === 0) return undefined;
        console.log(viendoMensajes);
        //const mensajesFiltrados = viendoMensajes.filter(obj3 => obj3.receptor === userLogueado.email || obj3.emisor ===  userLogueado.email )
        mensajesLimpios = viendoMensajes.filter(
          (obj3) =>
            obj3.receptor === userLogueado.email ||
            obj3.emisor === userLogueado.email
        );
        /* setMensajes({
          ...mensajes,
          mensajesFiltrados
        })  */
        return mensajesLimpios;
      });
      arr.map((obj) => Promise.all([obj]).then((obj2) => setMensajes(obj2)));

      /* if(mensajesCifrados === null) return

      mensajesCifrados.map(obj => viendoMensajes.push(obj => obj.data()));*/
    }
    getMensajes(users);

    dispatch(getNeighborhoods());
  }, [dispatch, userLogueado.email, users]);

  const goAnswer = () => {
    navigate("/home/players");
  };

  const onSubmit = (input) => {
    if (Object.entries(errors).length === 0) {
      dispatch(resetStateError());
      dispatch(updateData(currentUser.id, input));
      navigate("/home/canchas");
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
              placeholder="Elija un nombre de usuario"
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
              placeholder="URL nueva imagen perfil"
              name="img"
              {...register("img")}
            />
          </User>
          <Barrio>
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
              <option value="">Posición</option>
              <option value="arquero">Arquero</option>
              <option value="defensor">Defensor</option>
              <option value="mediocampista">Mediocampista</option>
              <option value="delantero">Delantero</option>
            </Select>
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
        <div>
          {mensajes?.length > 0
            ? mensajes[0]?.map((obj) => {
                return (
                  <div key={obj.id}>
                    <p>
                      Tienes mensajes con{" "}
                      {obj.emisor !== userLogueado.email
                        ? obj.emisor
                        : obj.receptor}
                    </p>
                  </div>
                );
              })
            : "no hay mensajes"}
          <button onClick={goAnswer}>Responder</button>
        </div>
      </SignInDiv>
    </div>
  );
}

export default DataUserGoogle;
