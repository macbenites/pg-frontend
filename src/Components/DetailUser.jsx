import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailsUser } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function DetailsUser() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detail = useSelector((state) => state.detailsUser);
  useEffect(() => {
    dispatch(getDetailsUser(id));
  }, [dispatch, id]);

  return (
    <div>
      {detail.length > 0 ? (
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
      <Link to="/home/canchas">
        <button>Volver</button>
      </Link>
    </div>
  );
}
