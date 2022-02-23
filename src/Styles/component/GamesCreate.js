import styled from "styled-components";
import { LinkTo } from "../reusable/LinkTo";
import { Button } from "../reusable/Button";

export const BtnBack = styled(Button)`
  display: flex;
  margin-left: -350px;
  margin-top: -80px;
  margin-bottom: 30px;
`;

export const CreateDiv = styled.div`
  padding: 0 2rem;
  select {
    display: flex;
    margin-top: 3px;
    height: 52px;
    width: 259px;
    background-color: #206f6c;
    border: none;
    border-radius: 15px;
    color: #abd1c6;
    padding-left: 10px;
    font-size: 17px;
  }
  input {
    margin: 0.2rem 0;
    height: 20px;
    color: #abd1c6;
  }

  h4 {
    font-weight: 700;
    letter-spacing: -0.05em;
    font-size: 3rem;
    margin: 2rem 0;
    color: #abd1c6;
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
      display: grid;
      grid-gap: 0.5rem;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas: "name user" "barrio position" "email email" "password password" "btn btn";
    }
  }
`;

export const BtnCreateGame = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

export const LinkToSignIn = styled(LinkTo)`
  color: var(--tertiary);
  font-weight: 600;
`;

