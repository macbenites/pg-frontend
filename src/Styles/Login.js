import styled from "styled-components";
import { Button } from "../Styles/reusable/Button";

export const BtnGoogle = styled.div`
  margin: auto;
  grid-area: google;
`;

export const BtnFacebook = styled.div`
  margin: auto;
  grid-area: facebook;
`;

export const BtnApple = styled(Button)`
  grid-area: apple;
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
    grid-gap: 2rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "username"
      "password"
      "btnlogin"
      "icon"
      "google"
      "facebook"
      "apple";
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: icon;
    font-size: 2rem;
    font-weight: 700;
    padding: 1rem 0;
    color: var(--text-color);
  }

  @media (min-width: 620px) {
    margin: 0 auto;
    max-width: 600px;
    form {
      grid-gap: 0.5rem;
      grid-template-columns: 1fr 20% 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "username icon google"
        "password icon facebook"
        "btnlogin icon apple";
    }
  }
`;

export const BtnLogIn = styled(Button)`
  grid-area: btnlogin;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  font-size: 1rem;
  color: var(--tertiary);
`;
