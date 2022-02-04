import {
  LandTop,
  ContentLanding,
  TextLanding,
  Landing,
} from "../Styles/LandingPage";
import { Button } from "../Styles/Button";
import { LinkTo } from "../Styles/LinkTo";
import imgLanding from "../Assets/img/img-landing.svg";
import Logo from "./Logo";

function LandingPage() {
  return (
    <Landing>
      <LandTop>
        <Logo />
        <div>
          <LinkTo to="/login">
            <Button primary>LogIn</Button>
          </LinkTo>
          <LinkTo to="/signin">
            <Button>SignIn</Button>
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
        </TextLanding>
        <div>
          <img src={imgLanding} alt="Camp" />
        </div>
      </ContentLanding>
    </Landing>
  );
}

export default LandingPage;
