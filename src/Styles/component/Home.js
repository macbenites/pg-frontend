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


