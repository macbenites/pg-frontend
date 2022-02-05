import styled from "styled-components";
import GoogleLogin from "react-google-login";
import { Button } from "../Styles/reusable/Button";

export const BtnGoogle = styled(GoogleLogin)`
  grid-area: google;
  background-color: transparent;
  border-radius: 1rem;
`;

export const LoginDiv = styled.div`
  padding: 0 2rem;

  h4 {
    text-align: center;
    font-weight: 700;
    letter-spacing: -0.05em;
    font-size: 3rem;
    margin: 2rem 0;
    color: var(--text-color);
  }

  form {
    display: grid;
    grid-gap: 0.4rem;
    grid-template-columns: 1fr;
    grid-template-areas:
      "username"
      "password"
      "btnlogin"
      "icon"
      "google"
      "google"
      "google"
      ;
    grid-template-rows: auto;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: icon;
    font-size: 2rem;
    font-weight: 700;
    padding: 1rem 0;
    color : var(--text-color);
  }

  @media (min-width: 568px) {
    margin: 0 auto;
    max-width: 500px;
    form {
      grid-template-columns: 1fr 20% 1fr;
      grid-template-rows: auto;
      grid-template-areas:
      "username icon google"
      "password icon google"
      "btnlogin icon google"
      ;
    }
  }
`;

export const BtnLogIn = styled(Button)`
 grid-area : btnlogin;
  width: 100%;
`;
