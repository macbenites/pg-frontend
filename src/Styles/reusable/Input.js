import styled from "styled-components";

export const InputForm = styled.input`
  background-color: var(--primary-light);
  border: none;
  padding: 1rem;
  border-radius: 0.75rem;
  width: -webkit-fill-available;
  border-style: none;
  height: auto;
  outline: none;
  font-size: 1rem;
  color: var(--text-color);
  box-shadow: rgb(0 0 0 / 24%) 0px 2px 2px 0px, rgb(0 0 0 / 24%) 0px 0px 1px 0px;
  ::placeholder {
    color: #c2c2c2;
    font-weight: 100;
  }
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: var(--text-color);
  font-weight: 300;
`;
