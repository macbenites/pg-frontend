import styled from "styled-components";

export const DivUserDetail = styled.div`
  color: var(--primary);
`;

export const ContentDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const ContainerDetail = styled.div`
  max-width: 600px;
  margin: 2rem;
  color: var(--primary);
  background-color: var(--secondary);
  padding: 2rem 1rem;
  border-radius: 0.75rem;
  @media (min-width: 700px) {
    margin: 2rem auto;
  }
`;
