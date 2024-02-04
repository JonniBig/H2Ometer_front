import styled from 'styled-components';

export const StyledTodayDiv = styled.div`
  // background-color: var(--secondary-white);
  font-family: Roboto;
  width: 264px;
  height: 258px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 656px;
    height: 276px;
    /* margin: 32px 24px 24px 24px; */
  }
  @media only screen and (min-width: 1440px) {
    width: 100%;
    /* width: 544px;
    height: 260px; */
  }

  .title {
    color: var(--black);
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25;
    @media screen and (min-width: 768px) {
      font-size: 26px;
      line-height: 1.23;
    }
  }

  .addWater {
    margin-right: auto;
    width: 264px;
    height: 212px;
    @media screen and (min-width: 768px) {
      height: 260px;
      width: 565px;
    }
    @media only screen and (min-width: 1440px) {
      width: 100%;
    }
  }

  /* .waterList {
    height: 212px;
    padding-left: 0px;
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-track {
      margin-block: 5px;
      background: var(--secondary-blue);
      border-radius: 50px;
      border: 1px solid var(--secondary-white);
    }
    &::-webkit-scrollbar-thumb {
      background: var(--secondary-blue);
      border-radius: 50px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--primary-blue);
    }
  } */

  .emptyText {
    color: var(--blue);
    font-family: Roboto;
    font-size: 14px;
    text-align: center;
    line-height: 1.25;
  }

  .addBtn {
    display: flex;
    gap: 8px;
    padding: 1px;
    color: var(--blue);
    border: none;
    background-color: transparent;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    transition: border var(--anim);
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 1.33;
    }
    &:hover,
    &:focus {
      cursor: pointer;
      color: var(--secondary-orange);
    }
  }

  .title {
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
  }

  .content {
    display: flex;
    align-items: center;
    margin: 0px;
    gap: 12px;
  }

  .edit {
    background: none;
    border: none;
    color: var(--secondary-blue);
    cursor: pointer;
    padding: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    &:hover {
      color: var(--secondary-orange);
    }
  }

  .volume {
    margin: 0;
    color: var(--blue);
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
  }
  .left {
    display: flex;
    align-items: center;
  }
  .list {
    display: flex;
    gap: 24px;
    flex-direction: column;
    padding: 0;
  }
  .string {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--secondary-skiblue);
  }
  .editBtn {
    background: transparent;
    border: none;
  }
  .deleteBtn {
    background: transparent;

    border: none;
  }
  .rightBtn {
    display: flex;
    gap: 18px;
  }
`;
