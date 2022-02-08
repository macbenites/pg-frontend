import styled from "styled-components";
import { Button } from "../Styles/reusable/Button";


export const PasswordDiv = styled.div`
  padding: 0 2rem;

  h4 {
    text-align: center;
    font-weight: 700;
    letter-spacing: -0.05em;
    font-size: 3rem;
    margin: 1rem 0;
    color: var(--text-color);
  }

  h5 {
    font-weight: 200;
    font-size: 1rem;
    font-style: normal;
    color: #e8e4e6;
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
  font-size: 0.8rem;
  margin: 0.1rem 0;
  color: var(--text-color);
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;
