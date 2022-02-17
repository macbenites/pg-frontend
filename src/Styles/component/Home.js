import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0 1rem;
`;
export const IntroStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr minmax(50px, 70%);
  grid-gap: 1rem;
  margin-top: 3rem;
  div {
    display: flex;
    align-items: center;
  }
  h5 {
    font-size: 1.3rem;
    color: var(--secondary);
    margin: 0 1rem;
  }

  span {
    font-size: 0.9rem;
    font-weight: 300;
  }
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
  @media (min-width: 620px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(50px, 70%);
  }
`;

export const CardsStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HomeContent = styled.div`
  padding: 1rem;
`;

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
