import styled from "styled-components";

export const SignUp = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  input {
    margin: 0.2rem 0;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  max-width: 800px;
  form {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const BtnSignUp = styled.div`
  @media (min-width: 568px) {
    grid-column: 1/3;
  }
`;
