import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LinkStyled = styled(Link)`
  color: var(--blue);
  text-decoration: none;
  padding: 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover,
  &:focus {
    color: var(--secondary-orange);
  }
  .text {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 1.33;
    }
  }
  .icon {
    background: white;
    border-radius: 50%;
  }
`;
