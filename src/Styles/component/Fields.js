import styled from "styled-components";

export const TopFields = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 1.6rem;
    color: var(--Links);
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CardStyles = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
`;
