import React from "react";
import Logo from "./Logo";
import CardsTeams from "./CardsTeams";
import { infoCardsTeams } from "../Utils/infoCardsTeams";
import { TitleStyle, BtnTeamsFilter, CardsTeamStyle, InputTeamsStyle, BtnCreateTeam } from "../Styles/Teams";


function Players(){
    return (
        <div>
            <Logo/>
            <TitleStyle>
            <h2>Equipos disponibles</h2>
            </TitleStyle>
            <BtnTeamsFilter><p>Filtrar</p></BtnTeamsFilter>
            <CardsTeamStyle>
            {infoCardsTeams.map((card) => (
                <CardsTeams
                key={card.teamName}
                teamName={card.teamName}
                players={card.players}
                search={card.search}
                />
            ))}
            </CardsTeamStyle>
            <InputTeamsStyle>
            <form>
                <h2>Creá tu equipo</h2>
                <input placeholder='Nombre del equipo'/>
                <input placeholder='Barrio'/>
                <input placeholder='Cantidad de jugadores'/>
                <input placeholder='Posición buscada'/>
                <BtnCreateTeam>
                Crear equipo
                </BtnCreateTeam>
            </form>
            </InputTeamsStyle>
        </div>
    )
};

export default Players;