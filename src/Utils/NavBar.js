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
    name: "Payment",
    link: "/payment",
    icon: <MdOutlinePayments />,
  },
];

export const NavAuth = [
  {
    name: "Futbolero",
    link: "/auth/signin",
    icon: <GiSoccerField />,
  },
  {
    name: "Empresa",
    link: "/auth/business",
    icon: <GiSoccerKick />,
  },
];
