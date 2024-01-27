import styled from 'styled-components';

export const WelcomeStyled = styled.div`
  max-width: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media screen and (min-width: 768px) {
    max-width: 707px;
    align-items: flex-start;
    gap: 60px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1404px;
    max-height: 582px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 81px;

    margin-bottom: 195px;
  }
`;
