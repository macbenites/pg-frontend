import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailsCourt } from "../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";

export default function DetailCourt() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detail = useSelector((state) => state.detailsCourt);
  console.log(detail)
  useEffect(() => {
    dispatch(getDetailsCourt(id));
  }, [dispatch, id]);
 
  return (
    <div>
      <Logo />
      {detail ? (
        <div>
          <p><strong>Nombre:</strong> {detail.name}</p>          
          <p><strong>Dirección:</strong> {detail.street}</p>
          <p><strong>Barrio:</strong> {detail.distric}</p>
          <p><strong>Teléfono:</strong> {detail.phone}</p>
          <p><strong>Email:</strong> {detail.email}</p>
          <p><strong>Horario:</strong> {detail.availableHours}</p>
          <p><strong>Tipo de suelo:</strong> {detail.typeFloor}</p>
          <p><strong>N. de jugadores:</strong> {detail.cantPlayers}</p>
          <p><strong>Tipo de pago:</strong> {detail.typePay}</p>
          <p><strong>Descripción:</strong> {detail.note}</p>          
        </div>
      ) : (
        <p>Cargando...</p>
      )}
      <Link to="/home/canchas">
        <button>Volver</button>
      </Link>
      <Link to="/reserveCourt">
        <button>Reservar</button>
      </Link>
    </div>
  );
}