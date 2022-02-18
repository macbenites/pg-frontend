import { useNavigate } from "react-router-dom";
import {MainCardsGames, DateStyle, Players, NameCenter, ButtonJoinCardsGames, BtnInviteCardsGames} from '../Styles/component/CardsGames'

function CardsGames({nameCenter, date, players, id}){

    const navigate = useNavigate();

    function handleClick(){
            navigate(`/home/joinMatch/${id}`)
    };

    function handleCLickInvite(){
        navigate('/home/players');
    };

    return (
        <div>
            <MainCardsGames>
                <NameCenter>{nameCenter}</NameCenter>
                <DateStyle>Fecha y hora: {date}</DateStyle>
                <Players>Faltan: {players} jugadores</Players>
                    <ButtonJoinCardsGames onClick={e => handleClick(e)}>Unirme</ButtonJoinCardsGames> 
                <BtnInviteCardsGames onClick={e => handleCLickInvite(e)}>Invitar</BtnInviteCardsGames>
            </MainCardsGames>
        </div>
    );
};

export default CardsGames;