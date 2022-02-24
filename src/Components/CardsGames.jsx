import { useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import {
  MainCardsGames,
  DateStyle,
  NameCenter,
  BtnGames,
  BtnDiv,
  Title,
} from "../Styles/component/CardsGames";
import { useSelector } from "react-redux";

function CardsGames({ nameCenter, date, players, id }) {
  const navigate = useNavigate();
  const { userState } = useSelector((state) => state);

  function handleClick() {
    navigate(`/home/joinMatch/${id}`);
  }

  function handleCLickInvite() {
    navigate("/home/players");
  }

  return (
    <MainCardsGames>
      <Title to={`/matches/${id}`} style={{ textDecoration: "none" }}>
        <NameCenter>{nameCenter}</NameCenter>
        <FaIcons.FaCalendarCheck /> {new Date(date).toLocaleString()}
      </Title>
      <DateStyle>
        {players > 0 ? (
          <div>Faltan: {players} jugadores</div>
        ) : (
          (players = "PARTIDO COMPLETO")
        )}
      </DateStyle>
      {userState?.role === "user" ? (
        <BtnDiv>
          <BtnGames primary onClick={(e) => handleClick(e)}>
            Unirse
          </BtnGames>
          <BtnGames onClick={(e) => handleCLickInvite(e)}>Invitar</BtnGames>
        </BtnDiv>
      ) : null}
    </MainCardsGames>
  );
}

export default CardsGames;
