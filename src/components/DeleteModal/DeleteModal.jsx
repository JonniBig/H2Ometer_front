import React from 'react';

import { DeleteStyled } from './DeleteModalStyled.styled';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const ConfirmDeleteModal = ({ onClose, onDelete }) => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const { t } = useTranslation();

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
      <p className="deleteQuest">{t('delete.deleteQuest')}</p>
      <div className="deleteBtns">
        <button className="btnCan" type="button" onClick={handleCloseModal}>
          {t('delete.cancel')}
        </button>
        <button className="btnDelete" type="button" onClick={handleDelete}>
          {t('delete.delete')}
        </button>
      </div>
    </DeleteStyled>
  );
};

export default ConfirmDeleteModal;
