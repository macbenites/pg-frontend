import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {MainCardsGames, DateStyle, Players, NameCenter, ButtonJoinCardsGames, BtnInviteCardsGames} from '../Styles/component/CardsGames'

function CardsGames({nameCenter, date, players}){

    const navigate = useNavigate();
    const allMatches = useSelector((state) => state.matches)

    console.log(allMatches)

    function handleClick(){
        if(allMatches.length !== 0){
            allMatches.map((e) => (
            navigate('/home/joinMatch/' + e.id_match)))
        } else {
            console.log('error')
        };
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