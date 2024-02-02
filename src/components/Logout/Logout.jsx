import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/auth/authSlice';

import closeModal from '../../assets/images/icons/close-x.svg';
import { Conteiner, StyledLogout } from './Logout.styled';

const Logout = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleLogout = () => {
    dispatch(logoutThunk());
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Conteiner>
          <StyledLogout>
            <div className="logoutTitleDiv">
              <h4 className="logoutTitle">Log out</h4>
              <button
                type="button"
                className="closeModal"
                onClick={handleCloseModal}
              >
                <img src={closeModal} alt="Close" />
              </button>
              <p className="logoutQuest">Do you really want to leave?</p>
            </div>
            <div className="logoutBtns">
              <button
                type="button"
                className="btnCan"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button type="button" className="btnLog" onClick={handleLogout}>
                Log out
              </button>
            </div>
          </StyledLogout>
        </Conteiner>
      )}
    </>
  );
};

export default Logout;
