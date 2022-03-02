import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDetailsCourt } from "../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import {
  DivCourtDetail,
  ContentBtn,
  ContainerCourt,
} from "../Styles/component/DetailCourt";
import { Button } from "../Styles/reusable/Button";

export default function DetailCourt() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const detail = useSelector((state) => state.detailsCourt);
  useEffect(() => {
    dispatch(getDetailsCourt(id));
  }, [dispatch, id]);

  console.log(detail);
  const handleBackClick = () => {
    navigate("/home/canchas");
  };

  const handleClick = () => {
    navigate("/reserveCourt");
  };

  return (
    <div>
      <Logo />
      <ContainerCourt>
        {detail ? (
          <DivCourtDetail>
            <h1>{detail.name}</h1>
            <p>
              <strong>Dirección:</strong> {detail.street}
            </p>
            <p>
              <strong>Barrio:</strong> {detail.district}
            </p>
            <p>
              <strong>Teléfono:</strong> {detail.phone}
            </p>
            <p>
              <strong>Email:</strong> {detail.email}
            </p>
            <p>
              <strong>Price:</strong> {detail.price}
            </p>
            <p>
              <strong>Horario:</strong> {detail.availableHours}
            </p>
            <p>
              <strong>Tipo de suelo:</strong> {detail.typeFloor}
            </p>
            <p>
              <strong>Descripción:</strong> {detail.note}
            </p>
          </DivCourtDetail>
        ) : (
          <p>Cargando...</p>
        )}
        <ContentBtn>
          <Button onClick={handleBackClick}>Volver</Button>
          <Button primary onClick={handleClick}>
            Reservar
          </Button>
        </ContentBtn>
      </ContainerCourt>
    </div>
  );
}
