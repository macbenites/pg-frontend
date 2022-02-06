import styled from "styled-components";
import { LinkTo } from "../Styles/reusable/LinkTo";
import { Button } from "../Styles/reusable/Button";

export const SignInDiv = styled.div`
  padding: 0 2rem;
  input {
    margin: 0.2rem 0;
  }
  form {
    div {
      display: flex;
      flex-direction: column;
    }
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
      div {
        gap: 0.4rem;
        flex-direction: row;
      }
    }
  }
`;

export const BtnSignIn = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

export const LinkToSignIn = styled(LinkTo)`
  color: var(--tertiary);
  font-weight: 600;
`;
