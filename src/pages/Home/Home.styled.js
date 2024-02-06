import styled from 'styled-components';
import backgroundHomeMob from '../../assets/images/home/backElementHomeMob.png';
import bottledHomeMob from '../../assets/images/home/bottleHomeMob.png';
import backgroundHomeTabl from '../../assets/images/home/backgroundHomeTabl.png';
import bottledHomeTabl from '../../assets/images/home/bottleHomeTabl.png';
import bottleHomeDesk from '../../assets/images/home/botleHomeDesk.png';
import element from '../../assets/images/main/backgroundElementMP.png';

export const StyledHomePage = styled.section`
  background-image: url(${backgroundHomeMob});
  background-position: bottom;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    background-image: url(${backgroundHomeTabl});
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${element});
    background-size: contain;
  }
  .conteiner {
    margin: 0 auto;
    max-width: 320px;
    padding: 24px 20px;
    @media screen and (min-width: 768px) {
      max-width: 768px;
      padding: 24px 32px;
    }
    @media screen and (min-width: 1440px) {
      max-width: 1440px;
      padding: 40px 112px;
      display: flex;
      justify-content: space-between;
    }
    .div1 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 438px;
      margin-bottom: 40px;
      @media screen and (min-width: 768px) {
        background-image: url(${bottledHomeTabl});
        background-repeat: no-repeat;
        background-position: top;
        height: 502px;
      }
      @media screen and (min-width: 1440px) {
        background-image: url(${bottleHomeDesk});
        margin: 0;
        width: 592px;
        height: 680px;
      }
      @media only screen and (max-width: 767px) {
        .bottle-image {
          background-image: url(${bottledHomeMob});
          background-repeat: no-repeat;
          background-size: contain;
          margin-top: 8px;
          margin-bottom: 16px;
          height: 208px;
        }
      }
    }
  }
  .div2 {
    padding: 24px 8px;
    background-color: var(--secondary-white);
    border-radius: 10px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
    @media screen and (min-width: 768px) {
      margin-bottom: 44px;
      padding: 32px 24px;
    }
    @media screen and (min-width: 1440px) {
      width: 592px;
      height: 680px;
      margin-top: 20px;
    }
  }
`;

export const LoaderStyledHome = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
