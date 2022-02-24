import {
  LandTop,
  ContentLanding,
  TextLanding,
  Landing,
  ImgDiv,
} from "../Styles/component/LandingPage";
import { Button } from "../Styles/reusable/Button";
import { LinkTo } from "../Styles/reusable/LinkTo";
import imgLanding from "../Assets/img/img-landing.svg";
import Logo from "./Logo";

function LandingPage() {
  return (
    <Landing>
      <LandTop>
        <Logo />
        <div>
          <LinkTo to="/auth/login">
            <Button primary>Iniciar Sesión</Button>
          </LinkTo>
        </div>
      </LandTop>
      <ContentLanding>
        <TextLanding>
          <h4>
            El juego
            <br />
            está por comenzar.
          </h4>
          <h2>Queres jugar?</h2>
          <p>
            Encontrá partidos de futbol para jugar en capital Federal creados por otros usuarios de la aplicación. 
            Podes ver las canchas registradas y hacer tus reservas online por fecha y hora, para que puedas crear un partido y esperar a que se complete con distintos usuarios.
          </p>
          <h2>Sos un Centro Deportivo?</h2>
          <p>
            Registrá tu cancha para que los usuarios puedan hacer sus reservas.
          </p>
          <LinkTo to="/auth/signin">
            <Button>Registrarse</Button>
          </LinkTo>
        </TextLanding>
        <ImgDiv>
          <img src={imgLanding} alt="Camp" />
        </ImgDiv>
      </ContentLanding>
    </Landing>
  );
}

export default LandingPage;
