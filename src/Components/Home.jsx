import NavBar from "./NavBar";
import { IntroStyle, HomeContent, HomeContainer, Search } from "../Styles/Home";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";

function Home() {
  const user = useSelector((obj) => obj.userLogeado.user);

  useEffect(() => {
    console.log(user)
  } , [user]); // con la data de user podemos maquillar el home con la foto y data del usuario

  if (!user) return <h1>Cargando...</h1>;

  return (
    <HomeContainer>
      <NavBar />
      <IntroStyle>
        <div>
          {user.photoURL ? (
            <img src={user.photoURL} alt="img perfil" />
          ) : (
            <img
              alt="img perfil"
              src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
            />
          )}
          <h5>
            Hola{" "}
            {user.displayName ? user.displayName : user.email.split("@")[0]}
            <br />
            <span>Bienvenido a FutbolApp</span>
          </h5>
        </div>
        <Search>
          <FaSearch />
          <input type="text" placeholder="Buscar..." />
        </Search>
      </IntroStyle>
      <HomeContent>
        <Outlet />
      </HomeContent>
    </HomeContainer>
  );
}
export default Home;
