import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  p {
    font-size: 0.8rem;
    font-weight: 100;
  }

  @media (min-width: 568px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Container = styled.div`
  padding: 1rem 2rem;
  color: var(--primary);
  background-color: var(--secondary);
`;
export const Wave = styled.div`
  margin-bottom: -10px;
`;

export const Foot = styled.footer`
  margin-top: auto;
`;
