import NavBar from "./NavBar";
import { IntroStyle, HomeContent, HomeContainer, Search } from "../Styles/Home";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { authState } from "../Redux/Actions/index";

function Home() {
  const { userState } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authState());
  }, [dispatch, userState]); // con la data de user podemos maquillar el home con la foto y data del usuario

  if (!userState) return <h1>Cargando...</h1>;

  return (
    <HomeContainer>
      <NavBar />
      <IntroStyle>
        <div>
          {userState?.photoURL ? (
            <img src={userState?.photoURL} alt="img perfil" />
          ) : (
            <img
              alt="img perfil"
              src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
            />
          )}
          <h5>
            Hola{" "}
            {userState?.displayName
              ? userState?.displayName
              : userState?.email?.split("@")[0]}
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
