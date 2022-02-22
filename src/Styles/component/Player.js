import styled from "styled-components";

export const PlayerDiv = styled.div`
  background-color: #abd1c6;
  border-radius: 0.75rem;
  max-width: 100%;
  color: #004643;
  :hover {
    background-color: #f9bc60;
  }

  img {
    max-width: 100%;
    height: 100%;
    border-radius: 100%;
  }
  h3 {
    text-align: center;
    margin: 0;
  }

  h4 {
    margin: 0;
  }
  p {
    text-align: center;
    text-transform: lowercase;
    margin: 0;
  }
  p::first-letter {
    text-transform: capitalize;
  }
`;

export const ImgDiv = styled.div`
  padding: 1rem;
`;

export const ContentDiv = styled.div`
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
`;
