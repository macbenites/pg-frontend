import {
  MainCardsGamesDet,
  Text,
  BtnDeleteMatch,
} from "../Styles/component/CardsGames";
import { deleteMatch } from "../Redux/Actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function YourMatchesDetail({ props }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteMatch(props.users_matches.matchIdMatch));
    Swal.fire({
      icon: "success",
      title: "Partido eliminado!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/home/canchas");
  };
  console.log(props);
  return (
    <MainCardsGamesDet>
      <h1>{props.nameCenter}</h1>
      <h5>{new Date(props.date).toLocaleString()}</h5>
      <Text>
        <strong>Nota :</strong>
        <br />
        {props.note}
      </Text>
      <BtnDeleteMatch value={props.id_match} onClick={handleDelete}>
        Eliminar
      </BtnDeleteMatch>
    </MainCardsGamesDet>
  );
}

export default YourMatchesDetail;
