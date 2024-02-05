import React, { useEffect, useState } from 'react';
import { Conteiner, SettingStyled } from './Setting.styled';

const SettingsModal = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);

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
      <SettingStyled onClick={e => e.stopPropagation()}>
        <div>
          <b className="modalSetting">Setting</b>
        </div>
        <p className="modalPhotoText">Your Photo</p>
        <ul className="modalPhotoList">
          <li className="modalListPhoto">
            {selectedFile && (
              <div className="photoDiv">
                <img
                  src={URL.createObjectURL(selectedFile)}
                  className="imageModal"
                  alt=""
                />
              </div>
            )}
          </li>
          <li className="modalListUpload">
            <label htmlFor="fileInput">
              <div className="upload_container">
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

        <form onSubmit={e => e.preventDefault()}>
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
              placeholder="test@gmail.com"
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
                Current password:
              </label>
              <div className="inputContainer">
                <input
                  type="password"
                  placeholder="Current password"
                  id="oldPassword"
                  className="modalInput modalInput_password"
                  value={oldPassword}
                  onChange={handleOldPasswordChange}
                />
                <div className="togglePasswordIcon"></div>
              </div>
            </div>
            <div className="passwordInputContainer">
              <label htmlFor="newPassword" className="passwordLabel">
                New password:
              </label>
              <div className="inputContainer">
                <input
                  type="password"
                  placeholder="New password"
                  id="newPassword"
                  className="modalInput modalInput_password"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                />
                <div className="togglePasswordIcon"></div>
              </div>
            </div>
            <div className="passwordInputContainer">
              <label htmlFor="repeatPassword" className="passwordLabel">
                Repeat new password:
              </label>
              <div className="inputContainer">
                <input
                  type="password"
                  placeholder="Repeat new password"
                  id="repeatPassword"
                  className="modalInput modalInput_password"
                  value={repeatPassword}
                  onChange={handleRepeatPasswordChange}
                />
                <div className="togglePasswordIcon"></div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="modal_form_submit"
            onClick={saveDetails}
          >
            Save
          </button>
        </form>
        <button type="button" className="closeBtn" onClick={handleCloseModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="#407BFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </SettingStyled>
    </Conteiner>
  );
};

export default SettingsModal;
