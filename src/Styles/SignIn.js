import styled from "styled-components";
import { InputForm } from "../Styles/reusable/Input";
import { LinkTo } from "../Styles/reusable/LinkTo";
import { Button } from "../Styles/reusable/Button";

export const SignInDiv = styled.div`
  padding: 0 2rem;
  form {
    display: grid;
    grid-gap: 0.4rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "name"
      "username"
      "barrio"
      "position"
      "email"
      "password"
      "button";
  }

  h4 {
    font-weight: 700;
    letter-spacing: -0.05em;
    font-size: 3rem;
    margin: 2rem 0;
    color: var(--text-color);
  }

  h5 {
    font-weight: 200;
    font-size: 1rem;
    font-style: normal;
    color: #e8e4e6;
  }

  @media (min-width: 568px) {
    margin: 0 auto;
    max-width: 500px;
    form {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        "name username"
        "barrio position"
        "email email"
        "password password"
        "button button";
    }
  }
`;


export const BtnSignIn = styled(Button)`
  width: 100%;
  grid-area: button;
`;

export const LinkToSignIn = styled(LinkTo)`
  color: var(--tertiary);
  font-weight: 600;
`;
