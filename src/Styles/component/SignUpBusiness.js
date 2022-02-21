import styled from "styled-components";

export const SignUp = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 0 2rem;
  input {
    margin: 0.2rem 0;
  }

  textarea {
    background-color: var(--primary-light);
    height: 5rem;
    padding: 1rem;
    border: none;
    border-radius: 0.75rem;
    width: -webkit-fill-available;
    border-style: none;
    outline: none;
    font-size: 1rem;
    resize: none;
    color: var(--text-color);
    ::placeholder {
      color: #d1d1d1;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  h4 {
    font-weight: 700;
    letter-spacing: -0.05em;
    font-size: 3rem;
    margin: 2rem 0;
    color: var(--text-color);
  }

  h5 {
    font-weight: 400;
    font-size: 1rem;
    font-style: normal;
    color: #e8e4e6;
  }

  form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 0.5rem;
  }
`;

export const BtnSignUp = styled.div`
  @media (min-width: 570px) {
    grid-column: 1/3;
  }
`;
