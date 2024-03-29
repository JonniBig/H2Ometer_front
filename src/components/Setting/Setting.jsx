import React, { useEffect, useState } from 'react';
import { Conteiner, SettingStyled } from './Setting.styled';

import closeModal from '../../assets/images/icons/close-x.svg';

import Eye from '../../assets/images/icons/eye-slash.svg';
import eyeOpened from '../../assets/images/icons/eye.svg';
import ArrowUp from '../../assets/images/icons/arrow-up-tray.svg';

import { useDispatch, useSelector } from 'react-redux';
import {
  updateUserSettingsThunk,
  uploadAvatarThunk,
} from '../../redux/auth/authSlice';

import { selectUser } from '../../redux/auth/authSelectors';
import userAva from '../../assets/images/icons/user.svg';
import { useTranslation } from 'react-i18next';

const SettingsModal = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [email, setEmail] = useState(user?.email ?? '');
  const [name, setName] = useState(user?.name ?? '');
  const [gender, setGender] = useState(user?.gender ?? 'male');

  const [selectedFile, setSelectedFile] = useState(null);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const { t } = useTranslation();
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  useEffect(() => {
    if (selectedFile === null) return;
    const formData = new FormData();
    formData.append('avatar', selectedFile);
    dispatch(uploadAvatarThunk(formData));
  }, [selectedFile, dispatch]);

  const handleOldPasswordChange = e => setOldPassword(e.target.value);
  const handleNewPasswordChange = e => setNewPassword(e.target.value);
  const handleRepeatPasswordChange = e => setRepeatPassword(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handleNameChange = e => setName(e.target.value);
  const handleGenderChange = e => setGender(e.target.value);

  const saveDetails = () => {
    const settingsFormData = {
      gender,
    };

    if (email.length > 0) settingsFormData['email'] = email;
    if (name.length > 0) settingsFormData['name'] = name;
    if (
      oldPassword.length > 0 &&
      newPassword.length > 0 &&
      repeatPassword.length > 0 &&
      newPassword === repeatPassword
    ) {
      settingsFormData['password'] = newPassword;
      settingsFormData['oldPassword'] = oldPassword;
    }
    dispatch(updateUserSettingsThunk(settingsFormData))
      .unwrap()
      .then(() => handleCloseModal());
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (!isModalOpen) {
    return null;
  }

  return (
    <Conteiner onClick={handleCloseModal}>
      <SettingStyled
        onClick={e => e.stopPropagation()}
        className={`secondary-blue ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
      >
        <div>
          <b className="modalSetting">{t('settingsModal.title')}</b>
          <button type="button" className="closeBtn" onClick={handleCloseModal}>
            <img src={closeModal} alt={t('settingsModal.closeButtonAlt')} />
          </button>
        </div>
        <p className="modalPhotoText">{t('settingsModal.photoText')}</p>
        <ul className="modalPhotoList">
          <li className="modalListPhoto">
            {selectedFile ? (
              <div className="photoDiv">
                <img
                  src={URL.createObjectURL(selectedFile)}
                  className="imageModal"
                  alt="Avatar"
                />
              </div>
            ) : (
              <div className="photoDiv">
                <img
                  src={user.avatar ? user.avatar : userAva}
                  className="imageModal"
                  alt="Avatar"
                />
              </div>
            )}
          </li>
          <li className="modalListUpload">
            <label htmlFor="fileInput">
              <div className="upload_container">
                <img src={ArrowUp} alt="Upload" />
                <span className="uploadText">
                  {t('settingsModal.uploadText')}
                </span>
              </div>
            </label>
            <input
              id="fileInput"
              className="modalFotoInput"
              type="file"
              name="photo"
              accept="image/jpeg,image/png"
              onChange={handleFileChange}
            />
          </li>
        </ul>

        <form
          className="modalForm"
          onSubmit={e => {
            e.preventDefault();
            saveDetails();
          }}
        >
          <div>
            <div>
              <div className="modalGenderBlock">
                <p className="modalGenderText">
                  {t('settingsModal.genderIdentityText')}
                </p>
                <input
                  type="radio"
                  className="genderInput"
                  value="female"
                  id="Woman"
                  name="gender"
                  checked={gender === 'female'}
                  onChange={handleGenderChange}
                />
                <label htmlFor="Woman" className="genderLabel">
                  {t('settingsModal.womanLabel')}
                </label>
                <input
                  type="radio"
                  className="genderInput"
                  value="male"
                  id="Man"
                  name="gender"
                  checked={gender === 'male'}
                  onChange={handleGenderChange}
                />
                <label htmlFor="Man" className="genderLabel">
                  {t('settingsModal.manLabel')}
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="nameInput" className="label">
                {t('settingsModal.nameLabel')}
              </label>
              <input
                type="text"
                placeholder={t('settingsModal.nameLabel')}
                id="nameInput"
                name="name"
                className="modalInput modalInputData"
                value={name}
                onChange={handleNameChange}
              />
              <label htmlFor="emailInp" className="label">
                {t('settingsModal.emailLabel')}
              </label>
              <input
                type="text"
                name="email"
                placeholder={t('settingsModal.emailLabel')}
                id="emailInp"
                className="modalInput modalInputData"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>

          <div className="passwordConteiner">
            <p className="modalPasswordText">
              {t('settingsModal.passwordText')}
            </p>
            <div className="passwordInputContainer">
              <label htmlFor="oldPassword" className="passwordLabel">
                {t('settingsModal.oldPasswordLabel')}
              </label>
              <div className="inputContainer">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t('settingsModal.oldPasswordLabel')}
                  id="oldPassword"
                  className="modalInput modalInput_password"
                  value={oldPassword}
                  onChange={handleOldPasswordChange}
                />
                <div
                  className="togglePasswordIcon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <img
                      src={eyeOpened}
                      width={18}
                      height={18}
                      alt="Hide Password"
                    />
                  ) : (
                    <img src={Eye} width={18} height={18} alt="Show Password" />
                  )}
                </div>
              </div>
            </div>
            <div className="passwordInputContainer">
              <label htmlFor="newPassword" className="passwordLabel">
                {t('settingsModal.newPasswordLabel')}
              </label>
              <div className="inputContainer">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t('settingsModal.newPasswordLabel')}
                  id="newPassword"
                  className="modalInput modalInput_password"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                />
                <div
                  className="togglePasswordIcon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <img
                      src={eyeOpened}
                      width={18}
                      height={18}
                      alt="Hide Password"
                    />
                  ) : (
                    <img src={Eye} width={18} height={18} alt="Show Password" />
                  )}
                </div>
              </div>
            </div>
            <div className="passwordInputContainer">
              <label htmlFor="repeatPassword" className="passwordLabel">
                {t('settingsModal.repeatPasswordLabel')}
              </label>
              <div className="inputContainer">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t('settingsModal.repeatPasswordLabel')}
                  id="repeatPassword"
                  className="modalInput modalInput_password"
                  value={repeatPassword}
                  onChange={handleRepeatPasswordChange}
                />
                <div
                  className="togglePasswordIcon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <img
                      src={eyeOpened}
                      width={18}
                      height={18}
                      alt="Hide Password"
                    />
                  ) : (
                    <img src={Eye} width={18} height={18} alt="Show Password" />
                  )}
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="modalSubmit">
            {t('settingsModal.saveButton')}
          </button>
        </form>
      </SettingStyled>
    </Conteiner>
  );
};

export default SettingsModal;
