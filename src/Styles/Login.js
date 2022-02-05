import styled from "styled-components";

export const LoginDiv = styled.div`
  form {
    display: flex;
    justify-content: center;
  }

  h3 {
    font-weight: 800;
    font-size: 3rem;
    font-family: Roboto;
    font-style: normal;
    margin-bottom: 7.9rem;
    margin-bottom: 5rem;
    text-align: center;
    color: #e8e4e6;
  }

  span {
    color: var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
`;

export const InputDiv1 = styled.div`
  width: 21.9rem;
  height: 3.8rem;
  margin-bottom: 1rem;
  margin-right: 11.5rem;
  input {
    width: 100%;
    height: 100%;
    background-color: #206f6c;
    color: var(--text-color);
    text-align: left;
    border-radius: 0.6rem;
    border: none;
  }
  span{
    color: #F70F08;
    font-size: 0.7rem;
  }
`;

export const BtnDiv = styled.div`
  width: 21.9rem;
  height: 3.8rem;
  margin-bottom: 1rem;
  button {
    width: 100%;
    height: 100%;
    background-color: var(--Links);
    color: black;
    border-radius: 0.6rem;
    border: none;
    text-align: center;
  }
`;

export const BtnNetworks = styled.div`
  width: 21.9rem;
  height: 3.8rem;
  margin-bottom: 1rem;
  button {
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    color: var(--text-color);
    border-radius: 0.6rem;
    border: 2px solid white;
    text-align: center;

  }

  span{    
    justify-content: left;
    align-items: center;
    //margin-top: 0.3rem;
  }
`;
