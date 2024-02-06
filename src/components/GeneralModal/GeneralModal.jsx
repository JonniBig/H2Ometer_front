import React, { useEffect } from 'react';
import { StyledGeneralModal } from './styled';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

const GeneralModal = ({ renderContent, onClose, title }) => {
  const handleBackdrop = e => {
    if (e.target === e.currentTarget) onClose();
  };
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return createPortal(
    <StyledGeneralModal onClick={handleBackdrop}>
      <div
        className={`modal-content secondary-blue ${
          isDarkMode ? 'dark-mode' : 'light-mode'
        }`}
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        {renderContent(onClose)}
      </div>
    </StyledGeneralModal>,
    document.querySelector('#portal')
  );
};

export default GeneralModal;
