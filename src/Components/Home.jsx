import NavBar from "./NavBar";
import { NavHome } from "../Utils/NavBar";
import {
  IntroStyle,
  HomeContent,
  HomeContainer,
} from "../Styles/component/Home";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authState, showUsers } from "../Redux/Actions/index";

function Home() {
  const { userState, users } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authState());
    dispatch(showUsers());
  }, [dispatch]); // con la data de user podemos maquillar el home con la foto y data del usuario

  const userLogeado = users?.find((obj) => obj.id === userState?.id);

  return (
    <HomeContainer>
      <NavBar items={NavHome} portal="home" />
      <IntroStyle>
        <div>
          <Link to="/home/profile">
            {userLogeado ? (
              <img src={userLogeado.image} alt="img perfil" />
            ) : (
              <img
                alt="img perfil"
                src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
              />
            )}
          </Link>
          <h5>
            Hola,{" "}
            {userLogeado
              ? userLogeado?.user_name
              : userLogeado?.email?.split("@")[0]}{" "}
            👋
            <br />
            <span>Bienvenido a SeJuega!</span>
          </h5>
        </div>
      </IntroStyle>
      <HomeContent>
        <Outlet />
      </HomeContent>
    </HomeContainer>
  );
}
export default Home;
