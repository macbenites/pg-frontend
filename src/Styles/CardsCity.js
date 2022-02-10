import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  background-color: var(--secondary);
  margin: 1rem;
  padding: 0.7rem;
  border-radius: 1.8rem;
  @media (min-width: 568px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ImgCard = styled.div`
  img {
    max-width: 100%;
    border-radius: 1.8rem;
  }
`;

export const Content = styled.div`
  color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
  h6 {
    margin: 0;
    font-size: 1.4rem;
  }
  p {
    margin: 0;
  }
  @media (min-width: 568px) {
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;
