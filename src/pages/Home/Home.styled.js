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
  // @media screen and (min-width: 1440px) {
  //   background-image: url(${bottleHomeDesk}, url(${element});
  //   background-size: contain;
  // }

  .conteiner {
    margin: 0 auto;
    max-width: 320px;
    // max-height: 836px;
    padding: 0px 20px;

    @media screen and (min-width: 768px) {
      max-width: 768px;
      padding: 0px 32px;
    }

    @media screen and (min-width: 1440px) {
      max-width: 1440px;
      padding: 0px 112px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .div1 {
      background-image: url(${bottledHomeMob});
      background-position: center;
      background-repeat: no-repeat;
      margin-top: 24px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 406px;
      outline: 1px solid blue; // ВИДАЛИТИ

      @media screen and (min-width: 768px) {
        background-image: url(${bottledHomeTabl});
        margin-top: 40px;
      }

      @media screen and (min-width: 1440px) {
        background-image: url(${bottleHomeDesk});
        margin-top: 52px;
        width: 592px;
        height: 680px;
      }
    }
  }

  .div2 {
    margin-bottom: 40px;
    padding: 24px 8px;
    background: var(--secondary-white);
    border-radius: 10px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);

    @media screen and (min-width: 768px) {
      margin-bottom: 44px;
      padding: 32px 24px;
    }

    @media screen and (min-width: 1440px) {
      width: 592px;
      height: 680px;
      margin: 0;
    }
  }
`;
