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

function Home() {

  const navigate = useNavigate()
  const {user , logOut } = useContext(context);
  
  useEffect(()=> console.log(user),[]) // con la data de user podemos maquillar el home con la foto y data del usuario

  const handleLogOut = () => {
    logOut();
    navigate("/login")
  }

  if(!user) return <h1>Cargando...</h1>

  return (
    <div>
      <HomeStyle>
        <Logo />
        <NavBar />
      </HomeStyle>
      <IntroStyle>
        <div>
          <h4>Hola {user.displayName ? user.displayName : user.email}</h4>
          <p>Bienvenido</p>
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
