import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem; 
  background-color: var(--secondary);
  margin: 1rem;
  padding: 0.7rem;
  border-radius: 1.8rem;
  width: 400px;
  height: 150px;
  @media (min-width: 568px) {
    grid-template-columns: 1fr 1fr;
  }
  :hover{background-color: #F9BC60;}
`;

export const ImgCard = styled.div`
  img {
    max-width: 100%;
    border-radius: 1.5rem;
    height: 150px;
  }
`;

export const Content = styled.div`
  color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
  h6 {
    margin-top: 5px;
    font-size: 1.4rem;
  }
  p {
    display: flex;
    margin-top: -45px;
    font-size: 15px;
  }
  @media (min-width: 568px) {
  }
  button{
    margin-top: 25px;
    width: 170px;
    height: 30px;
    background-color: #004643;
    border: none;
    border-radius: 10px;
    color: var(--secondary);
  }
  button:hover{
    background-color: var(--tertiary);
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;
