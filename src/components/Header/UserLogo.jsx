import openIcon from '../../assets/images/icons/chevron-double-up.svg';
import UserLogoModal from './UserLogoModal';

const UserLogo = () => {
  return (
    <div>
      <div>
        <span>NAME</span>
        <img src="" alt="" />
      </div>
      <img src={openIcon} alt="Open menu" />

      <UserLogoModal />
    </div>
  );
};

export default UserLogo;
