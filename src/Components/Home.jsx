import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Cards from "./Cards";
import { infoCard } from "../Utils/infoCards";
import { HomeStyle, IntroStyle, CardsStyle } from "../Styles/Home";
import { context } from "../Context/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
//import Map from "./Map";


function Home() {
  const navigate = useNavigate();
  const { user, logOut } = useContext(context);

  useEffect(() => console.log(user), [user]); // con la data de user podemos maquillar el home con la foto y data del usuario

  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };

  if (!user) return <h1>Cargando...</h1>;

  return (
    <div>
      <HomeStyle>
        <Logo />
        <NavBar />
      </HomeStyle>
      <IntroStyle>
        <div>
          <h4>
            Hola{" "}
            {user.displayName ? user.displayName : user.email.split("@")[0]}
          </h4>
          <p>Bienvenido a FutbolApp</p>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
        <input type="text" placeholder="Buscar..." />
      </IntroStyle>
      <CardsStyle>
        {infoCard.map((card) => (
          <Cards
            key={card.name}
            name={card.name}
            link={card.link}
            description={card.description}
            amount={card.amount}
          />
        ))}
      </CardsStyle>
    </div>
  );
}
export default Home;
