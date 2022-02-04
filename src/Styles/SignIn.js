import styled from "styled-components";
import { InputForm } from "../Styles/reusable/Input";
import { LinkTo } from "../Styles/reusable/LinkTo";
import { Button } from "../Styles/reusable/Button";

export const SignInDiv = styled.div`
  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(50px, auto);
    grid-gap: 10px;
    grid-template-areas:
      "name username"
      "barrio position"
      "email email"
      "password password"
      "button button";
  }

  h4 {
    font-weight: 700;
    letter-spacing: -0.05em;
    font-size: 3.75rem;
    margin: 2rem 0;
    color: var(--text-color);
  }

  h5 {
    font-weight: 200;
    font-size: 1rem;
    font-style: normal;
    color: #e8e4e6;
  }
`;

export const InputName = styled(InputForm)`
  grid-area: name;
`;

export const InputUser = styled(InputForm)`
  grid-area: username;
`;

export const InputBarrio = styled(InputForm)`
  grid-area: barrio;
`;

export const InputPosition = styled(InputForm)`
  grid-area: position;
`;

export const InputEmail = styled(InputForm)`
  grid-area: email;
`;

export const InputPassword = styled(InputForm)`
  grid-area: password;
`;

export const BtnSignIn = styled(Button)`
  width: 100%;
  grid-area: button;
`;

export const LinkToSignIn = styled(LinkTo)`
  color: var(--tertiary);
`;
