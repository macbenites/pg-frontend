import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getDetailsMatch, removeMatchPlayer } from "../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";

export default function DetailMatch() {
  const dispatch = useDispatch();
  const { id_match } = useParams();
  const detail = useSelector((state) => state.detailsMatch);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDetailsMatch(id_match));
  }, [dispatch, id_match]);

  function handleClick(e){
    // e.preventDefault();
    dispatch(removeMatchPlayer(id_match, e.target.value));
    navigate(`/matches/${id_match}`);
  };
 
  return (
    <div>
      <Logo />
      {detail ? (
        <div>
          <p><strong>Lugar:</strong> {detail.nameCenter}</p>
          <p><strong>Fecha y hora:</strong> {detail.date}</p>
          <p><strong>Cancelación:</strong> {detail.cancellation} antes de la hora de inicio</p>
          <p><strong>Descripción:</strong> {detail.note}</p> 
          <span><strong>Jugadores:</strong> 
            {detail.matchPlayers?.map((element, index) => (
                <ul key={index}>
                  <li>{element.user_name} - {element.position}<button value={element.user_name}  onClick={e => handleClick(e)}>Sacar</button></li>
                </ul>
              ))
            }
          </span>         
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