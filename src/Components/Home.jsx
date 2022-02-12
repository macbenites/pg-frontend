import NavBar from "./NavBar";
import { HomeStyle, IntroStyle, HomeContent } from "../Styles/Home";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((obj) => obj.userLogeado.user);

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
