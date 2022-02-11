import React from "react";
import NavBar from "./NavBar";
import { HomeStyle, IntroStyle, HomeContent } from "../Styles/Home";
import { context } from "../Context/authContext";
import { useContext } from "react";

import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function Home() {
  const { user } = useContext(context);

  useEffect(() => console.log(user), [user]); // con la data de user podemos maquillar el home con la foto y data del usuario

  if (!user) return <h1>Cargando...</h1>;

  return (
    <div>
      <HomeStyle>
        <NavBar />
      </HomeStyle>
      <IntroStyle>
        <div>
          <h4>
            Hola{" "}
            {user.displayName ? user.displayName : user.email.split("@")[0]}
          </h4>
          <p>Bienvenido a FutbolApp</p>
        </div>
        <input type="text" placeholder="Buscar..." />
      </IntroStyle>
      <HomeContent>
        <Outlet />
      </HomeContent>
    </div>
  );
}
export default Home;
