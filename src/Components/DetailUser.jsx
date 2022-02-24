import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDetailsUser } from "../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import {
  ButtonBack,
  ButtonMessage,
  DivUserDetail
} from "../Styles/component/DetailUser";


export default function DetailUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const detail = useSelector((state) => state.detailsUser);
  console.log(detail)
  useEffect(() => {
    dispatch(getDetailsUser(id));
  }, [dispatch, id]);

  const handleClickBack = () => {
    navigate("/home/players");
  };

  const handleClick = () => {
    navigate(`chat`)
  };
 
  return (
    <div>
      <Logo />
      {detail ? (
        <DivUserDetail>
          <p>
            <strong>Nombre:</strong> {detail.name}
          </p>
          <p>
            <strong>Posición:</strong> {detail.player_position}
          </p>
          <p>
            <strong>Barrio:</strong> {detail.neighborhood}
          </p>
          <img alt="player" src={detail.image} />
        </DivUserDetail>
      ) : (
        <p>Cargando...</p>
      )}
      <ButtonMessage onClick={handleClick}>Enviar Mensaje</ButtonMessage>
      <ButtonBack onClick={handleClickBack}>Volver</ButtonBack>
    </div>
  );
}
