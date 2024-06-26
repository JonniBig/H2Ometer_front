import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 50px;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  overflow: auto;
  z-index: 999;
`;

export const UserLogoModalStyled = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 3000;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  width: 118px;
  height: 172px;
  background-color: var(--white);
  border-radius: 10px;
  border: 1px solid white;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  @media screen and (min-width: 1440px) {
    top: 35px;
  }
  .btn {
    display: flex;
    align-items: center;
    width: 86px;
    height: 20px;
    padding: 0;
    color: var(--blue);
    background: transparent;
    border: none;
    transition: color 0.3s ease;
    &:hover,
    &:focus {
      color: var(--secondary-orange);
      text-decoration: underline;
    }
  }
  .image {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;
