import styled, { css } from "styled-components";

export const Button = styled.button`
  display: inline-block;
  font-size: 1rem;
  font-weight: 800;
  border-radius: 0.75rem;
  padding: 1rem 0;
  margin: 0.5rem;
  width: 10rem;
  background-color: var(--tertiary);
  color: var(--text-color);
  border: none;
  cursor: pointer;
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
