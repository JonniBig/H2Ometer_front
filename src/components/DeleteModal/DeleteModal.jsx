import React from 'react';

import { DeleteStyled } from './DeleteModalStyled.styled';
import { useSelector } from 'react-redux';

const ConfirmDeleteModal = ({ onClose, onDelete }) => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const handleCloseModal = () => {
    onClose();
  };

  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <DeleteStyled
      className={`secondary-blue ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <p className="deleteQuest">Are you sure you want to delete the entry?</p>
      <div className="deleteBtns">
        <button className="btnCan" type="button" onClick={handleCloseModal}>
          Cancel
        </button>
        <button className="btnDelete" type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </DeleteStyled>
  );
};

export default ConfirmDeleteModal;
