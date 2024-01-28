import styled from 'styled-components';

export const StyledLogout = styled.div`
  backdrop {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 280px;
    height: 260px;
    border-radius: 10px;
    background-color: var(--white);
    overflow: hidden;
    overflow-y: auto;
  }
  isHidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
`;
