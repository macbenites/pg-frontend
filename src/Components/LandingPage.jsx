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
            <Button primary>LogIn</Button>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim.
          </p>
          <LinkTo to="/auth/signin">
            <Button>SignIn</Button>
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
