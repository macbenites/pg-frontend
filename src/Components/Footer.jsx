import wave from "../Assets/img/waveFooter.svg";
import { Foot, Wave, Container, Content } from "../Styles/Footer";
import SocialList from "./SocialList";

function Footer() {
  return (
    <Foot>
      <Wave>
        <img src={wave} alt="wave" draggable="false" />
      </Wave>
      <Container>
        <Content>
          <p>
            Hecho con <span>❤️</span> por el equipo de Sejuega{" "}
            {new Date().getFullYear()}
          </p>
          <SocialList />
        </Content>
      </Container>
    </Foot>
  );
}

export default Footer;
