import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDetailsMatch, removeMatchPlayer } from "../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import {
  ContainerMatch,
  DivMatchDetail,
  Item,
  Title,
} from "../Styles/component/DetailMatch";
import { Button } from "../Styles/reusable/Button";
import { IoIosArrowDropleftCircle } from "react-icons/io";

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
      <ContainerMatch>
        {detail ? (
          <DivMatchDetail>
            <Title>
              <h1>{detail.nameCenter}</h1>
              <IoIosArrowDropleftCircle onClick={handleClickBack} />
            </Title>
            <p>
              <strong>Fecha y hora:</strong>
              <br />
              {new Date(detail.date).toLocaleString()}
            </p>
            <p>
              <strong>Descripción:</strong>
              <br /> {detail.note}
            </p>
            <div>
              <p>
                <strong>Jugadores:</strong>
              </p>
              {detail.matchPlayers?.map((element, index) => (
                <div key={index}>
                  <Item>
                    {element.name} <br /> {element.position}
                    <Button value={element.user_name} onClick={handleClick}>
                      Sacar
                    </Button>
                  </Item>
                </div>
              ))}
            </div>
          </DivMatchDetail>
        ) : (
          <p>Cargando...</p>
        )}
      </ContainerMatch>
    </div>
  );
}
