import React from 'react';
import { useTranslation } from 'react-i18next';
import En from '../../assets/images/flags/britain_england.svg';
import Uk from '../../assets/images/flags/ukraine.svg';

import { Button } from '@mui/material';

const ButtonTransl = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = newLanguage => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <Button
        sx={{
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          border:
            i18n.language === 'en'
              ? '1px solid var(--blue)'
              : '1px solid transparent',
          boxShadow:
            i18n.language === 'en'
              ? '0 2px 6px rgba(0, 0, 0, 0.2)'
              : '0 2px 6px  transparent',
        }}
        id="language-button-en"
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={() => handleLanguageChange('en')}
      >
        <img
          src={En}
          alt="EN"
          style={{ width: '20px', height: '20px', marginRight: '5px' }}
        />
        EN
      </Button>
      <Button
        sx={{
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          border:
            i18n.language === 'uk'
              ? '1px solid var(--blue)'
              : '1px solid transparent',
          boxShadow:
            i18n.language === 'uk'
              ? '0 2px 6px rgba(0, 0, 0, 0.2)'
              : '0 2px 6px  transparent',
        }}
        id="language-button-uk"
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={() => handleLanguageChange('uk')}
      >
        <img
          src={Uk}
          alt="UK"
          style={{ width: '20px', height: '20px', marginRight: '5px' }}
        />
        UK
      </Button>
    </>
  );
};

export default ButtonTransl;
