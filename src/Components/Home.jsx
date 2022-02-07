import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Cards from "./Cards";
import { infoCard } from "../Utils/infoCards";
import { HomeStyle, IntroStyle, CardsStyle } from "../Styles/Home";

function Home() {
  return (
    <div>
      <HomeStyle>
        <Logo />
        <NavBar />
      </HomeStyle>
      <IntroStyle>
        <div>
          <h4>Hola Yeison</h4>
          <p>Bienvenido</p>
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
