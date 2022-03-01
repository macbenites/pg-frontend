import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDetailsUser } from "../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Styles/reusable/Button";
import { ContentBtn } from "../Styles/component/DetailCourt";
import Logo from "./Logo";
import {
  DivUserDetail,
  ContentDetail,
  ContainerDetail,
} from "../Styles/component/DetailUser";

export default function DetailUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const detail = useSelector((state) => state.detailsUser);
  console.log(detail);
  useEffect(() => {
    dispatch(getDetailsUser(id));
  }, [dispatch, id]);

  const handleClickBack = () => {
    navigate("/home/players");
  };

  const handleClick = () => {
    navigate(`chat`);
  };

  return (
    <div>
      <Logo />
      <ContainerDetail>
        {detail ? (
          <ContentDetail>
            <DivUserDetail>
              <h1>{detail.name}</h1>
              <p>
                <strong>Posición:</strong> {detail.player_position}
              </p>
              <p>
                <strong>Barrio:</strong> {detail.neighborhood}
              </p>
            </DivUserDetail>
            <img alt="player" src={detail.image} />
          </ContentDetail>
        ) : (
          <p>Cargando...</p>
        )}
        <ContentBtn>
          <Button primary onClick={handleClick}>
            Enviar Mensaje
          </Button>
          <Button onClick={handleClickBack}>Volver</Button>
        </ContentBtn>
      </ContainerDetail>
    </div>
  );
}
