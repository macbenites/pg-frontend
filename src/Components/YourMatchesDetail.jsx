import { 
    MainCardsGames,
    DateStyleDet,
    NameCenter,
    Text,
    BtnDeleteMatch
} from "../Styles/component/CardsGames";
import { deleteMatch } from '../Redux/Actions';
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

function YourMatchesDetail ({props}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(props);

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteMatch(props.users_matches.matchIdMatch));
        Swal.fire({
            icon: "success",
            title: "Partido eliminado!",
            showConfirmButton: false,
            timer: 1500,
        });
        navigate('/home/canchas');
    };

    return (
        <MainCardsGames>
            <BtnDeleteMatch value={props.id_match} onClick={handleDelete}>Eliminar</BtnDeleteMatch>
            <NameCenter>{props.nameCenter}</NameCenter>
            <DateStyleDet>{props.date}</DateStyleDet>
            <Text>{props.note}</Text>
        </MainCardsGames>
    );
};

export default YourMatchesDetail;