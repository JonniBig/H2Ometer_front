import styled from 'styled-components';

// export const ULStyled = styled.div`
//   display: flex;

//   top: 100%;
//   right: 0;
//   background-color: red;
//   border-radius: 10px;
//   box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

//   flex-direction: column;
//   gap: 16px;
//   padding: 16px;
//   width: 118px;
//   height: 88px;
//   z-index: 3000;
// `;

export const UserLogoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  .user {
    display:flex;
  align-items: center;
  gap: 8px;

  }
  .name {
    font-size: 16px;
    line-height: 1.33;

  @media screen and (min-width: 768px) {
    font-size: 18px;

  }
  .avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  .icon {
    color: var(--blue);
    width: 16px;
    height: 16px;
  }
`;
