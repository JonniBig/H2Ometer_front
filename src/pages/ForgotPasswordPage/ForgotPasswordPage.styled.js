import styled from 'styled-components';
import { Link } from 'react-router-dom';

import backgroundMPMob from '../../assets/images/main/backgroundMPMob.png';
import backgroundMPTabl from '../../assets/images/main/backgroundMPTabl.png';
import backgroundMP from '../../assets/images/main/backgroundMP.png';
import backgroundElementMP from '../../assets/images/main/backgroundElementMP.png';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 100px;
  box-sizing: border-box;

  background-image: url(${backgroundMPMob});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url(${backgroundMPTabl});
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundMP}), url(${backgroundElementMP});
    background-size: contain;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignInLink = styled(Link)`
  color: var(--blue);
  margin-top: 10px;
  text-decoration: none;
  &:hover {
    color: var(--secondary-orange);
    font-weight: 600;
    text-decoration: none;
  }
`;
