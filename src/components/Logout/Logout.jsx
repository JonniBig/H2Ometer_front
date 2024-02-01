import React from 'react';
import { StyledLogout } from './Logout.styled';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/auth/authSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className="backdrop isHidden">
      <StyledLogout>
        <div className="logoutTitle">
          <h4 className="logoutTitle">Log out</h4>
          <button type="button" className="closeModal"></button>
          <p className="logoutQuest">Do you really want to leave?</p>
        </div>
        <div className="logoutBtns">
          <button type="button" className="btnCan">
            Cancel
          </button>
          <button type="button" className="btnLog" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </StyledLogout>
    </div>
  );
};

export default Logout;
