import styled from "styled-components";
import { LinkTo } from "../Styles/reusable/LinkTo";
import { Button } from "../Styles/reusable/Button";

export const BtnSignIn = styled(Button)`
  position: relative;
  background-color: transparent;
  color: var(--text-color);
  border: 2px solid var(--text-color);
  width: 100%;
  :hover {
    color: var(--primary);
    background-color: var(--text-color);
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  svg {
    position: absolute;
    left: 1rem;
    font-size: 1.2rem;
  }
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

  h5 {
    font-weight: 200;
    font-size: 1rem;
    font-style: normal;
    color: #e8e4e6;
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
  small {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    margin: 0.1rem 0;
    color: var(--text-color);
  }
  svg {
    color: var(--tertiary);
    font-size: 1rem;
    margin-right: 0.5rem;
  }
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

export const LinkToLogin = styled(LinkTo)`
  color: var(--tertiary);
  font-weight: 600;
`;
