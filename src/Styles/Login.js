import styled from "styled-components";
import { Button } from "../Styles/reusable/Button";

export const BtnGoogle = styled.div`
  button {
    width: 100%;
    background-color: red;
    display: inline-flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    padding: 1rem;
    height: 3.5rem;
  }
`;

export const BtnFacebook = styled.div`
  button {
    width: 100%;
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    padding: 1rem;
    text-transform: lowercase;
    font-weight: 500;

    height: 3.5rem;
    border-radius: 0.75rem;
    box-shadow: rgb(0 0 0 / 24%) 0px 2px 2px 0px,
      rgb(0 0 0 / 24%) 0px 0px 1px 0px;
  }
`;

export const BtnApple = styled(Button)`
  width: 100%;
`;

export const LoginDiv = styled.div`
  padding: 0 2rem;

  h4 {
    text-align: center;
    font-weight: 700;
    letter-spacing: -0.05em;
    font-size: 3rem;
    margin: 1rem 0;
    color: var(--text-color);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 620px) {
    margin: 0 auto;
    max-width: 600px;

    form {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 1rem;
    }
  }
`;

export const BtnLogIn = styled(Button)`
  width: 100%;
`;

export const ErrorMessage = styled.div`
  font-size: 0.9rem;
  margin: 0.2rem 0;
  color: var(--text-color);
`;
export const Bar = styled.div`
  margin: auto;
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-color);
  padding: 1rem;
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const Error = styled.div`
  position: relative;
  border-radius: 0.75rem;
  padding: 0.5rem;
  margin-bottom: 2rem;
  border: 2px solid var(--text-color);
`;
