import styled from "styled-components";

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  font-size: 1.3rem;
  span {
    color: var(--text-color);
    margin-left: 0.5rem;
  }
  @media (max-width: 568px) {
    img {
      display: none;
    }
  }
`;
