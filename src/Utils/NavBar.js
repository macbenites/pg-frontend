import { MdOutlinePayments, MdSportsSoccer } from "react-icons/md";
import { GiSoccerField, GiSoccerKick } from "react-icons/gi";

export const NavHome = [
  {
    name: "Canchas",
    link: "canchas",
    icon: <GiSoccerField />,
  },
  {
    name: "Jugadores",
    link: "players",
    icon: <GiSoccerKick />,
  },
  {
    name: "Partidos",
    link: "games",
    icon: <MdSportsSoccer />,
  },
  {
    name: "Mis Reservas",
    link: "yourMatches",
    icon: <MdOutlinePayments />,
  },
];
