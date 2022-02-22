import styled from "styled-components";

export const Filter = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: raw;
  gap: 1rem;
`;

export const PlayersDiv = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 1rem 0;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
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
