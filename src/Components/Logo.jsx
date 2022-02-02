import React from "react";
import { StyledLogo } from "../Styles/Logo";
import logoBall from "../Assets/img/soccer-ball.svg";

const Logo = () => {
  return (
    <StyledLogo>
      <img src={logoBall} alt="logo" />
      <span>FutbolApp</span>
    </StyledLogo>
  );
};

export default Logo;
