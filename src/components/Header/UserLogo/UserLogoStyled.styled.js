import styled from 'styled-components';

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

`;

export const ImgIconStyled = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: var(--blue);
`;
