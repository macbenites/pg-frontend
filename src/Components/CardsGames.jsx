import { useNavigate, Link } from "react-router-dom";
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
            <Link to={`/matches/${id}`} style={{textDecoration: 'none'}}>
                <NameCenter>{nameCenter}</NameCenter>
            </Link>    
                <DateStyle>Fecha y hora: {date}</DateStyle>
                <Players>{players > 0? <div>Faltan: {players} jugadores</div>: players = 'PARTIDO COMPLETO'}</Players>
                    <ButtonJoinCardsGames onClick={e => handleClick(e)}>Unirse</ButtonJoinCardsGames> 
                <BtnInviteCardsGames onClick={e => handleCLickInvite(e)}>Invitar</BtnInviteCardsGames>
            </MainCardsGames>
        </div>
    );
};

export default CardsGames;