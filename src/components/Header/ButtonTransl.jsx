import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import En from '../../assets/images/flags/britain_england.svg';
import Uk from '../../assets/images/flags/ukraine.svg';

import { Button, Menu, MenuItem } from '@mui/material';

const ButtonTransl = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const lngs = {
    en: { flag: En },
    uk: { flag: Uk },
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = newLanguage => {
    i18n.changeLanguage(newLanguage);
    handleClose();
  };

  return (
    <>
      <Button
        id="language-button"
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img
          src={i18n.language === 'en' ? En : Uk}
          alt={i18n.language.toUpperCase()}
          style={{ width: '20px', height: '20px', marginRight: '5px' }}
        />

        {i18n.language.toUpperCase()}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.keys(lngs).map(lng => (
          <MenuItem key={lng} onClick={() => handleLanguageChange(lng)}>
            <img
              src={lngs[lng].flag}
              alt={lng.toUpperCase()}
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
            />
            {lng.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ButtonTransl;
