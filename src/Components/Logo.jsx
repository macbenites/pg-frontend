import React from "react";
import { StyledLogo } from "../Styles/Logo";
import logoBall from "../Assets/img/soccer-ball.svg";

function Logo({ changeColor }) {
  return (
    <StyledLogo>
      <img src={logoBall} alt="logo" draggable="false" />
      <span>FutbolApp</span>
    </StyledLogo>
  );
}

export default Logo;
