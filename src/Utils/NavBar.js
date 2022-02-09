import { MdOutlinePayments, MdSportsSoccer } from "react-icons/md";
import { GiSoccerField, GiSoccerKick } from "react-icons/gi";

export const NavItems = [
  {
    name: "Canchas",
    link: "/home",
    icon: <GiSoccerField />,
  },
  {
    name: "Jugadores",
    link: "/players",
    icon: <GiSoccerKick />,
  },
  {
    name: "Partidos",
    link: "/teams",
    icon: <MdSportsSoccer />,
  },
  {
    name: "Payment",
    link: "/payment",
    icon: <MdOutlinePayments />,
  },
];
