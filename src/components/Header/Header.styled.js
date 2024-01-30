import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Conteiner = styled.div`
  margin: 0 auto;
  max-width: 320px;
  padding: 8px 20px 0px 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 16px 32px 0px 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 12px 112px 0px 112px;
  }
`;

export const StyledHeader = styled.header`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
`;

export const StyledLogo = styled.a`
  font-weight: 700;
  margin: 0;
`;

export const LinkStyled = styled(Link)`
  color: var(--blue);
  text-decoration: none;
  padding: 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover,
  &:focus {
    color:var(--secondary-orange);

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

  }
`;
