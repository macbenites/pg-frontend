import styled from "styled-components";

export const LandTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentLanding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;

  div {
    margin: 0 auto;
  }
  img {
    width: 100%;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const TextLanding = styled.div`
  padding: 1rem 0;

  h4 {
    text-align: center;
    font-weight: 700;
    letter-spacing: -0.05em;
    font-size: 3.75rem;
    margin: 2rem 0;
    color: var(--text-color);
  }
  p {
    text-align: center;
    color: var(--secondary);
    line-height: 1.6;
    letter-spacing: -0.02em;
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    max-width: 50%;
    padding-right: 2rem;

    p {
      text-align: justify;
    }
    h4 {
      text-align: left;
    }
  }
`;

export const Landing = styled.div`
  padding: 0 2rem;
`;
