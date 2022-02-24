import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDetailsMatch, removeMatchPlayer } from "../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import {
  BtnBack,
  BtnRemovePlayer,
  DivMatchDetail
} from "../Styles/component/DetailMatch";

export default function DetailMatch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id_match } = useParams();
  const detail = useSelector((state) => state.detailsMatch);

  useEffect(() => {
    dispatch(getDetailsMatch(id_match));
  }, [dispatch, id_match]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(removeMatchPlayer(id_match, e.target.value));
    navigate("/home/games");
  };

  const handleClickBack = () => {
    navigate("/home/games");
  };

  return (
    <div>
      <Logo />
      {detail ? (
        <DivMatchDetail>
          <p>
            <strong>Cancha:</strong> {detail.nameCenter}
          </p>
          <p>
            <strong>Fecha y hora:</strong> {detail.date}
          </p>
          <p>
            <strong>Descripción:</strong> {detail.note}
          </p>
          <div>
            <strong>Jugadores:</strong>
            {detail.matchPlayers?.map((element, index) => (
              <ul key={index}>
                <li>
                  {element.name} - {element.position}
                  <BtnRemovePlayer
                    value={element.user_name}
                    onClick={handleClick}
                  >
                    Sacar
                  </BtnRemovePlayer>
                </li>
              </ul>
            ))}
          </div>
        </DivMatchDetail>
      ) : (
        <p>Cargando...</p>
      )}
      <BtnBack onClick={handleClickBack}>Volver</BtnBack>
    </div>
  );
};
