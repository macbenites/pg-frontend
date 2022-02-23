import { 
    MainCardsGames,
    DateStyle,
    NameCenter,
    Text
} from "../Styles/component/CardsGames";
import { deleteMatch } from '../Redux/Actions';
import { useDispatch } from "react-redux";

function YourMatchesDetail ({props}) {

    const dispatch = useDispatch();

    console.log(props);

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteMatch(e.target.value));
    };

    return (
        <MainCardsGames>
            <button value={props.id_match} onClick={handleDelete}>Eliminar</button>
            <NameCenter>{props.nameCenter}</NameCenter>
            <DateStyle>{props.date}</DateStyle>
            <Text>{props.note}</Text>
        </MainCardsGames>
    );
};

export default YourMatchesDetail