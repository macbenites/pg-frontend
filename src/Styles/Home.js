import styled from "styled-components";

export const HomeStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
`;

export const IntroStyle = styled.div`
  margin-left: 1rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p,
  h4 {
    color: #abd1c6;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0.2rem;
  }
  h4 {
    font-size: 36px;
  }
  p {
    font-size: 18px;
  }
  input {
    height: 38px;
    width: 422.00030517578125px;
    left: 891px;
    top: 187px;
    border-radius: 15px;
    margin-right: 2rem;
    font-size: 15px;
    border: none;
  }
`;

export const CardsStyle = styled.div`
  display: flex;
  flex-direction: raw;
  justify-content: space-between;
`;

export const HomeContent = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-gap: 1rem;
  margin-top: 1rem;
`;
