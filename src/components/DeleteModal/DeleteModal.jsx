import React, { useState } from 'react';
import closeModal from '../../assets/images/icons/close-x.svg';
import { Conteiner, DeleteStyled } from './DeleteModalStyled.styled';

const ConfirmDeleteModal = ({ onClose, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Conteiner>
          <DeleteStyled>
            <h4 className="deleteTitle">Delete entry</h4>
            <button
              type="button"
              className="closeModal"
              onClick={handleCloseModal}
            >
              <img src={closeModal} alt="Close" />
            </button>
            <p className="deleteQuest">
              Are you sure you want to delete the entry?
            </p>
            <div className="deleteBtns">
              <button
                className="btnCan"
                type="button"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button className="btnDelete" type="button">
                Delete
              </button>
            </div>
          </DeleteStyled>
        </Conteiner>
      )}
    </>
  );
};

export default ConfirmDeleteModal;
