import settingIcon from '../../assets/images/icons/cog-6-tooth.svg';
import logoutIcon from '../../assets/images/icons/arrow-right-on-rectangle.svg';

const UserLogoModal = () => {
  return (
    <div>
      <div>
        <img src={settingIcon} alt="Setting" />
        Setting
      </div>
      <div>
        <img src={logoutIcon} alt="Log out" />
        Log out
      </div>
    </div>
  );
};

export default UserLogoModal;
