import styled, { css } from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 800;
  border-radius: 0.75rem;
  padding: 1rem;
  width: 10rem;
  background-color: var(--tertiary);
  color: var(--text-color);
  border: none;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 24%) 0px 2px 2px 0px, rgb(0 0 0 / 24%) 0px 0px 1px 0px;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: #e57676;
  }
  ${(props) =>
    props.primary &&
    css`
      background-color: var(--Links);
      color: var(--primary);
      :hover {
        background-color: #fac575;
      }
    `}
`;
