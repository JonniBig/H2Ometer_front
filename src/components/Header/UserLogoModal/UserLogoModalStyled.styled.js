import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;

  z-index: 999;
`;

export const UserLogoModalStyled = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  z-index: 3000;

  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  width: 118px;
  height: 88px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  .btn {
    display: flex;
    width: 86px;
    height: 20px;
    padding: 0;
    color: var(--blue);
    background: transparent;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;

      &:hover,
      &:focus {
    color: var(--secondary-orange);
    text-decoration: underline;
    /* Інші стилі */
  }

  .image {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;
