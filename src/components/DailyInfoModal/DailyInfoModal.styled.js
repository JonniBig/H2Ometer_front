import styled from 'styled-components';

export const StyledDailyInfoModal = styled.div`
  position: absolute;
  left: 50%;
  bottom: 100%;
  display: flex;
  transform: translateX(-100%);
  z-index: 5;
  flex-direction: column;
  gap: 16px;
  padding: 24px 16px;

  width: 292px;
  height: 188px;
  border-radius: 10px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);

  font-size: 16px;
  line-height: 1.25;
  color: var(--black);
  .date {
    color: var(--blue);
  }
  .value {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: var(--blue);
  }
`;
