import styled from "styled-components";

export const Filter = styled.div`
    display : flex;
    flex-wrap : wrap;
    flex-direction : raw;

    input , select {
        height : 30px;
        width : 210px;
        margin : 10px
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
  justify-content: center;
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