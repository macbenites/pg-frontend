import React from "react";
import Logo from "./Logo";
import { LoginDiv, BtnGoogle, BtnLogIn } from "../Styles/Login.js";
import { InputUser, InputPassword } from "../Styles/SignIn";

export default function Login() {
  //742910100228-bf1uk5tddd041i1fvd8bjcg77fk7qkmo.apps.googleusercontent.com// credencial google

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };
  return (
    <div>
      <Logo />
      <LoginDiv>
        <h4>Ingresa a tu cuenta</h4>
        <form>
          <InputUser
            type="text"
            name="username"
            placeholder="Usuario"
            autoComplete="off"
          />
          <InputPassword
            type="password"
            name="password"
            placeholder="Contraseña"
            autoComplete="off"
          />
          <BtnLogIn primary type="submit">
            Ingresar
          </BtnLogIn>
          <div>/</div>
          <BtnGoogle
            clientId="742910100228-bf1uk5tddd041i1fvd8bjcg77fk7qkmo.apps.googleusercontent.com"
            buttonText="Ingresar con Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <BtnGoogle
            clientId="742910100228-bf1uk5tddd041i1fvd8bjcg77fk7qkmo.apps.googleusercontent.com"
            buttonText="Ingresar con Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <BtnGoogle
            clientId="742910100228-bf1uk5tddd041i1fvd8bjcg77fk7qkmo.apps.googleusercontent.com"
            buttonText="Ingresar con Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </form>
      </LoginDiv>
    </div>
  );
}
