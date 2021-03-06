import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  setDoc,
  getDocs,
  doc,
  onSnapshot /* updateDoc */,
} from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { authState, getDetailsUser } from "../Redux/Actions/index";
import { useParams, useNavigate } from "react-router-dom";
import { MdUpdate, MdSend, MdOutlineHistory } from "react-icons/md";

import {
  MsgChat,
  BtnBack,
  Btn,
  Send,
  DivChat,
  Title,
  ContainerChat
} from "../Styles/component/Chat";

function Chat() {
  const [mensajes, setMensajes] = useState();
  const [inputMensaje, setInputMensaje] = useState();
  const user = useSelector((obj) => obj.userState);
  const userReceptor = useSelector((obj) => obj.detailsUser);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const docuRef = doc(
      db,
      `mensajes/chat/${user.email}/${new Date().getTime()}`
    );
    setDoc(docuRef, {
      id: new Date().getTime(),
      texto: inputMensaje,
      receptor: userReceptor.email,
      emisor: user.email,
    });
    setInputMensaje(" ");
    getMensajes();
    const unsub = onSnapshot(doc(db, "mensajes", "chat"), (doc) => {
      console.log("Current data: ", doc.data());
    });
    console.log(unsub);
  };

  const handleChange = (e) => {
    setInputMensaje(e.target.value);
  };

  async function getMensajes() {
    const arrayEnviados = [];
    const collectionRef = collection(db, "mensajes/chat/" + user.email);
    const mensajesCifrados = await getDocs(collectionRef);
    mensajesCifrados.forEach((element) => {
      arrayEnviados.push(element.data());
    });
    const arrayEnviadosFiltrados = arrayEnviados.filter(
      (obj) => obj.receptor === userReceptor.email
    );

    let arrayRecibidos = [];

    const collectionRecibidos = collection(
      db,
      "mensajes/chat/" + userReceptor.email
    );
    const mensajesRecibidos = await getDocs(collectionRecibidos);

    mensajesRecibidos.forEach((element) => {
      arrayRecibidos.push(element.data());
    });

    const arrayRecibidosFiltrados = arrayRecibidos.filter(
      (obj) => obj.receptor === user.email
    );

    const array = arrayEnviadosFiltrados.concat(arrayRecibidosFiltrados);

    const newArray = array.filter(
      (obj) => obj.receptor === user.email || obj.emisor === user.email
      // || obj.emisor === userReceptor.email || obj.receptor === userReceptor.email
    );

    newArray.sort((a, b) => {
      return a.id - b.id;
    });
    setMensajes(newArray);
  }

  const showMensajes = () => {
    getMensajes();
  };

  const handleClick = () => {
    navigate(`/users/${params.id}`);
  };

  /* useEffect(()=>{
        getMensajes()
    },[]) */

  useEffect(() => {
    dispatch(authState());
    dispatch(getDetailsUser(params.id));
  }, [dispatch, params.id]);

  return (
    <ContainerChat>
      <BtnBack onClick={handleClick}>Volver</BtnBack>
      <DivChat>
        <Title>
          <h3>SeJuega Chat</h3>
          <Btn onClick={showMensajes}>
            {mensajes ? (
              <MdUpdate title="Actualizar" />
            ) : (
              <MdOutlineHistory title="Historial de Mensajes" />
            )}
          </Btn>
        </Title>
        {mensajes
          ? mensajes.map((obj) => {
              return (
                <MsgChat key={obj.id}>
                  <strong>{obj ? obj.emisor : "user"} :</strong>
                  <p>{obj.texto}</p>
                </MsgChat>
              );
            })
          : null}
        <form onSubmit={submitForm}>
          <Send>
            <input
              type="text"
              placeholder="Esriba su mensaje"
              value={inputMensaje}
              onChange={handleChange}
            />
            <Btn type="submit">
              <MdSend />
            </Btn>
          </Send>
        </form>
      </DivChat>
    </ContainerChat>
  );
}

export default Chat;
