import styled from 'styled-components';
import backgroundMPMob from '../../assets/images/main/backgroundMPMob.png';
import backgroundMPTabl from '../../assets/images/main/backgroundMPTabl.png';
import backgroundMP from '../../assets/images/main/backgroundMP.png';
import backgroundElementMP from '../../assets/images/main/backgroundElementMP.png';

export const StyledMainPageBackgroun = styled.div`
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

export const LoaderStyledMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
