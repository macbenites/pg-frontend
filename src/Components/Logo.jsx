import { StyledLogo } from "../Styles/Logo";
import logoBall from "../Assets/img/soccer-ball.svg";

function Logo({ changeColor }) {
  return (
    <StyledLogo>
      <img src={logoBall} alt="logo" draggable="false" />
    </StyledLogo>
  );
}

export default Logo;
