import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in;

  &:hover {
    color: var(--secondary);
  }

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    max-height: ${({ open }) => (open ? "100vh" : "0")};
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
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const NavLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  transition: all 0.2s ease-in;
  padding: 1rem;
  border-radius: 0.75rem;
  color: var(--text-color);
  cursor: pointer;

  svg {
    margin-right: 1rem;
    color: var(--text-color);
  }
  &:hover {
    background-color: var(--secondary);
    box-shadow: 0px 0px 46px 0px rgba(171, 209, 198, 0.3);
    span {
      color: var(--primary);
    }
  }

  @media (min-width: 768px) {
    border-radius: 0.75rem;
    margin: 0 0.5rem;
    svg {
      display: none;
    }

    &:hover {
      background-color: var(--secondary);
      box-shadow: 0px 0px 46px 0px rgba(171, 209, 198, 0.3);
      span {
        color: var(--primary);
      }
    }
  }
`;
