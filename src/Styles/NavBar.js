import styled from "styled-components";
import { LinkTo } from "./reusable/LinkTo";

export const NavStyle = styled.div`
  display: flex;
  flex-direction: column;
`;


export const NavLink = styled(LinkTo)`
  display: flex;
  align-items: center;
  width: 8rem;
  font-size: 1rem;
  font-weight: 800;
  border-radius: 0.75rem;
  padding: 0.6rem;
  color: var(--text-color);
  border: none;
  margin: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  span {
    color: red;
  }
  :hover,
  :focus {
    background-color: var(--secondary);
    color: var(--primary);
    svg {
      fill: var(--primary);
    }
  }
  svg {
    margin-right: 0.5rem;
    font-size: 1.5rem;
    font-weight: 800;
    fill: var(--text-color);
  }
`;
