import styled from "styled-components";

export const LandTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const ContentLanding = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr minmax(100px, auto);
  grid-gap: 2rem;

  img {
    width: 100%;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;
export const ImgDiv = styled.div`
  display: flex;
  @media (min-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const TextLanding = styled.div`
  padding: 1rem 0;
  text-align: left;

  h4 {
    font-weight: 700;
    letter-spacing: -0.05em;
    font-size: 3.75rem;
    margin: 2rem 0;
    color: var(--text-color);
  }
  p {
    color: var(--secondary);
    line-height: 1.6;
    letter-spacing: -0.02em;
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    padding-right: 2rem;
  }
`;

export const Landing = styled.div`
  padding: 0 2rem;
`;
