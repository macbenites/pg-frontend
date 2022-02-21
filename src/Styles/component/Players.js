import styled from "styled-components";

export const Filter = styled.div`
    display : flex;
    flex-wrap : wrap;
    flex-direction : raw;
    margin-bottom: 50px;
    label{
      color: #abd1c6;
      margin-left: 50px;
      margin-top: 10px;
      font-size: 20px;
      margin-right: 20px;
    }
    select{
      display: flex;
      width: 300px;
      height: 50px;
      border: none;
      border-radius: 10px;
      padding-left: 20px;
      background-color: #206F6C;
      color: #abd1c6;
    }
`

export const PlayersDiv = styled.div`
    display : flex;
    flex-wrap : wrap;
    flex-direction : raw;
    margin-left: 190px;
`

export const Search = styled.div`
  display: flex;
  height: 50px;
  width: 300px;
  margin-left: 800px;
  margin-top: -100px;
  align-items: center;
  padding: 0 1rem;
  font-size: 1em;
  border-radius: 1rem;
  background-color: var(--primary-light);
  input {
    color: var(--text-color);
    outline: none;
    border: none;
    width: 100%;
    font-size: 1.1rem;
    background-color: transparent;
    ::placeholder {
      color: #d1d1d1;
    }
  }

  svg {
    fill: var(--secondary);
    margin: 0 1rem;
    font-size: 1.2rem;
  }
`;