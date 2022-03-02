import { FaExclamationCircle } from "react-icons/fa";
import { InputForm } from "../../Styles/reusable/Input";
import { Select } from "../../Styles/reusable/Select";
import { ErrorMessage } from "../../Styles/Login.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineMarkEmailUnread, MdPerson, MdSend } from "react-icons/md";
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
import styled from "styled-components";

function DataUserGoogle() {
  const [mensajes, setMensajes] = useState([]);
  const [active, setActive] = useState(false);
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
        <Title>
          <h4>Completá tu perfil</h4>
          <MdOutlineMarkEmailUnread
            onClick={() => {
              setActive(!active);
            }}
          />
        </Title>
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
        {/* <hr /> */}
        {active && (
          <Message>
            <Top>
              <MdOutlineMarkEmailUnread />
              <p>Bandeja</p>
              <MdSend onClick={goAnswer} />
            </Top>
            {mensajes?.length > 0
              ? mensajes[0]?.map((obj) => {
                  return (
                    <Notification key={obj.id}>
                      <MdPerson />
                      <p>
                        {obj.emisor !== userLogueado.email
                          ? obj.emisor
                          : obj.receptor}
                      </p>
                    </Notification>
                  );
                })
              : "no hay mensajes"}
          </Message>
        )}
      </SignInDiv>
    </div>
  );
}

export default DataUserGoogle;

export const Message = styled.div`
  margin: 1rem 0;
  border-radius: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: var(--secondary);
  svg {
    font-size: 2rem;
    color: var(--primary);
  }
`;

export const Notification = styled.div`
  border-radius: 0.75rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--primary);
  svg {
    cursor: pointer;
    font-size: 2rem;
  }
`;

export const Title = styled(Top)`
  svg {
    cursor: pointer;
    font-size: 2rem;
    color: var(--secondary);
  }
`;
