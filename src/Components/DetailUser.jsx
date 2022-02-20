import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailsUser } from "../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";

export default function DetailUser() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detail = useSelector((state) => state.detailsUser);
  console.log(detail)
  useEffect(() => {
    dispatch(getDetailsUser(id));
  }, [dispatch, id]);
 
  return (
    <div>
      <Logo />
      {detail ? (
        <div>
          <img alt="player" src={detail.image} />
          <p>
            <strong>Nombre:</strong> {detail.name}
          </p>
          <p>
            <strong>Posición:</strong> {detail.player_position}
          </p>
          <p>
            <strong>Barrio:</strong> {detail.neighborhood}
          </p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
      <Link to={`chat`}>
        <button>Enviar Mensaje</button>
      </Link>
      <Link to="/home/players">
        <button>Volver</button>
      </Link>
    </div>
  );
}
