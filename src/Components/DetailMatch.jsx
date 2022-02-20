import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailsMatch } from "../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";

export default function DetailMatch() {
  const dispatch = useDispatch();
  const { id_match } = useParams();
  const detail = useSelector((state) => state.detailsMatch);

  useEffect(() => {
    dispatch(getDetailsMatch(id_match));
  }, [dispatch, id_match]);
 
  return (
    <div>
      <Logo />
      {detail ? (
        <div>
          <p><strong>Lugar:</strong> {detail.nameCenter}</p>
          <p><strong>Fecha y hora:</strong> {detail.date}</p>
          <p><strong>Cancelación:</strong> {detail.cancellation} antes de la hora de inicio</p>
          <p><strong>Descripción:</strong> {detail.note}</p> 
          <p><strong>Jugadores:</strong> 
            {detail.matchPlayers?.map((element) => (
                <ul>
                  <li>{element.user_name} - {element.position}</li>
                </ul>
              ))
            }
          </p>         
        </div>
      ) : (
        <p>Cargando...</p>
      )}
      <Link to="/home/games">
        <button>Volver</button>
      </Link>
    </div>
  );
}