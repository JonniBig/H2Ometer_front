import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';

import settingIcon from '../../../assets/images/icons/cog-6-tooth.svg';
import logoutIcon from '../../../assets/images/icons/arrow-right-on-rectangle.svg';

const UserLogoModal = ({ open, onClose }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    onClose();
  };

  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        getContentAnchorEl={null}
      >
        <div>
          <Button onClick={handleClick}>
            <img src={settingIcon} alt="Setting" />
            Setting
          </Button>
          <Button onClick={handleClick}>
            <img src={logoutIcon} alt="Log out" />
            Log out
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export default UserLogoModal;
