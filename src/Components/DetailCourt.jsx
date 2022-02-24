import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDetailsCourt } from "../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import{
  DivCourtDetail,
  BtnBack
} from "../Styles/component/DetailCourt";

export default function DetailCourt() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const detail = useSelector((state) => state.detailsCourt);
  useEffect(() => {
    dispatch(getDetailsCourt(id));
  }, [dispatch, id]);

  const handleBackClick = () => {
    navigate("/home/canchas");
  };

 
  return (
    <div>
      <Logo />
      {detail ? (
        <DivCourtDetail>
          <p><strong>Nombre:</strong> {detail.name}</p>          
          <p><strong>Dirección:</strong> {detail.street}</p>
          <p><strong>Barrio:</strong> {detail.district}</p>
          <p><strong>Teléfono:</strong> {detail.phone}</p>
          <p><strong>Email:</strong> {detail.email}</p>
          <p><strong>Horario:</strong> {detail.availableHours}</p>
          <p><strong>Tipo de suelo:</strong> {detail.typeFloor}</p>
          <p><strong>Descripción:</strong> {detail.note}</p>          
        </DivCourtDetail>
      ) : (
        <p>Cargando...</p>
      )}
      <BtnBack onClick={handleBackClick}>Volver</BtnBack>
    </div>
  );
}