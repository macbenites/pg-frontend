import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { HomeStyle, IntroStyle, HomeContent } from "../Styles/Home";
import { context } from "../Context/authContext";
import { Button } from "../Styles/reusable/Button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

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
        <Button onClick={handleLogOut}>Log Out</Button>
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
        <NavBar />
        <Outlet />
      </HomeContent>
    </div>
  );
}
export default Home;
