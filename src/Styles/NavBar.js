import styled from "styled-components";
import { LinkTo } from "./reusable/LinkTo";

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: flex;

  @media (max-width: 620px) {
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    max-height: ${({ open }) => (open ? "100vh" : "0")};
    transition: max-height 0.2s ease-in;
  }
`;

export const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    fill: var(--text-color);
    margin-right: 0.5rem;
  }
  @media screen and (min-width: 620px) {
    display: none;
  }
`;
export const NavLink = styled(LinkTo)`
  display: flex;
  align-items: center;
  margin: 1rem;
  font-weight: 500;
  transition: all 0.2s ease-in;
  &:hover {
    color: var(--secondary);
  }
  svg {
    margin-right: 0.8rem;
  }
  @media (min-width: 620px) {
    margin: 0 1rem;
    svg {
      display: none;
    }
  }
`;
