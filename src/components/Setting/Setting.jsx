import React, { useEffect, useState } from 'react';
import { Conteiner, SettingStyled } from './Setting.styled';
import closeModal from '../../assets/images/icons/close-x.svg';

import Eye from '../../assets/images/icons/eye-slash.svg';
import eyeOpened from '../../assets/images/icons/eye.svg';
import ArrowUp from '../../assets/images/icons/arrow-up-tray.svg';
import { useSelector } from 'react-redux';

const SettingsModal = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const handleEmailChange = e => setEmail(e.target.value);
  const handleNameChange = e => setName(e.target.value);
  const handleGenderChange = e => setGender(e.target.value);

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleOldPasswordChange = e => setOldPassword(e.target.value);
  const handleNewPasswordChange = e => setNewPassword(e.target.value);
  const handleRepeatPasswordChange = e => setRepeatPassword(e.target.value);

  const saveDetails = () => {
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Gender:', gender);
    console.log('Selected File:', selectedFile);
    console.log('Змінено пароль:', newPassword);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          <b className="modalSetting">Setting</b>
          <button type="button" className="closeBtn" onClick={handleCloseModal}>
            <img src={closeModal} alt="Close" />
          </button>
        </div>
        <p className="modalPhotoText">Your Photo</p>
        <ul className="modalPhotoList">
          <li className="modalListPhoto">
            {selectedFile && (
              <div className="photoDiv">
                <img
                  src={URL.createObjectURL(selectedFile)}
                  className="imageModal"
                  alt="Avatart"
                />
              </div>
            )}
          </li>
          <li className="modalListUpload">
            <label htmlFor="fileInput">
              <div className="upload_container">
                <img src={ArrowUp} alt="Close" />
                <span className="uploadText">Upload a photo</span>
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

        <form className="modalForm" onSubmit={e => e.preventDefault()}>
          <div>
            <div>
              <div className="modalGenderBlock">
                <p className="modalGenderText">Your gender identity</p>
                <input
                  type="radio"
                  className="genderInput"
                  value="woman"
                  id="Woman"
                  name="gender"
                  checked={gender === 'woman'}
                  onChange={handleGenderChange}
                />
                <label htmlFor="Woman" className="genderLabel">
                  Woman
                </label>
                <input
                  type="radio"
                  className="genderInput"
                  value="man"
                  id="Man"
                  name="gender"
                  checked={gender === 'man'}
                  onChange={handleGenderChange}
                />
                <label htmlFor="Man" className="genderLabel">
                  Man
                </label>
              </div>
            </div>
            <label htmlFor="nameInput" className="label">
              Your name
            </label>
            <input
              type="text"
              placeholder="Name"
              id="nameInput"
              name="name"
              className="modalInput modalInputData"
              value={name}
              onChange={handleNameChange}
            />
            <label htmlFor="emailInp" className="label">
              E-mail
            </label>
            <input
              type="text"
              name="email"
              placeholder="your-email@gmail.com"
              id="emailInp"
              className="modalInput modalInputData"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div>
            <p className="modalPasswordText">Password</p>
            <div className="passwordInputContainer">
              <label htmlFor="oldPassword" className="passwordLabel">
                Outdated password:
              </label>
              <div className="inputContainer">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Outdated password"
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
                New password:
              </label>
              <div className="inputContainer">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="New password"
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
                Repeat new password:
              </label>
              <div className="inputContainer">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Repeat new password"
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

          <button type="button" className="modalSubmit" onClick={saveDetails}>
            Save
          </button>
        </form>
      </SettingStyled>
    </Conteiner>
  );
};

export default SettingsModal;
