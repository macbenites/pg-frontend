import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary);

  @media (min-width: 568px) {
    flex-direction: row;
  }
`;
