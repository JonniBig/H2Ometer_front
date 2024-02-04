// SettingModal.js
import React, { useState } from 'react';
import * as Styles from './ModalStyles';
import exitIcon from './sprite.svg'; 


const SettingModal = ({ onLogout }) => {
  const [userData, setUserData] = useState({
    photo: null,
    gender: '',
    name: '',
    email: '',
    oldPassword: '',
    newPassword: '',
    repeatPassword: '',
  });

  const [notification, setNotification] = useState('');

  const handleInputChange = (field, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setUserData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const uploadPhoto = () => {
    // Логіка завантаження фото тут
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логіка обробки подання форми тут

    // Приклад: Показ повідомлення про помилку
    setNotification('Не вдалося оновити дані користувача. Будь ласка, спробуйте ще раз.');
  };

  return (
    <Styles.Modal className="modal">
      <div className="modal-content">
        <Styles.ExitButton onClick={onLogout}>
          <Styles.ExitIcon src={exitIcon} alt="Exit Icon" />
        </Styles.ExitButton>

        <form onSubmit={handleSubmit}>
          <Styles.FormGroup>
            <label htmlFor="photo">Ваше фото</label>
            <input type="file" id="photo" accept="image/*" onChange={handlePhotoChange} />
            <button type="button" onClick={uploadPhoto}>
              Завантажити фото
            </button>
          </Styles.FormGroup>
          
   <Styles.FormGroupWrapper className="form-group-wrapper">
          <Styles.FormGroup>
            <label>Ваша гендерна ідентичність</label>
            <Styles.RadioButtonGroup>
              <label htmlFor="male">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={() => handleInputChange('gender', 'male')}
                />
                Чоловік
              </label>

              <label htmlFor="female">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={() => handleInputChange('gender', 'female')}
                />
                Жінка
              </label>
              {/* Додайте більше варіантів гендеру за потреби */}
            </Styles.RadioButtonGroup>
          </Styles.FormGroup>
 
          <Styles.FormGroup>
            <label htmlFor="name">Ваше ім'я</label>
            <input
              type="text"
              id="name"
              placeholder="Введіть ваше ім'я"
              value={userData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </Styles.FormGroup>

          <Styles.FormGroup>
            <label htmlFor="email">Електронна пошта</label>
            <input
              type="email"
              id="email"
              placeholder="Введіть вашу електронну пошту"
              value={userData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </Styles.FormGroup>
          </Styles.FormGroupWrapper>
          <Styles.FormGroupPasswordWrapper className="password-group-wrapper">
          <Styles.FormGroup>
            <label htmlFor="oldPassword">Пароль:</label>
            <input
              type="password"
              id="oldPassword"
              placeholder="Старий пароль, поточний пароль"
              value={userData.oldPassword}
              onChange={(e) => handleInputChange('oldPassword', e.target.value)}
            />

            <label htmlFor="newPassword">Новий пароль:</label>
            <input
              type="password"
              id="newPassword"
              placeholder="Новий пароль"
              value={userData.newPassword}
              onChange={(e) => handleInputChange('newPassword', e.target.value)}
            />

            <label htmlFor="repeatPassword">Повторіть новий пароль:</label>
            <input
              type="password"
              id="repeatPassword"
              placeholder="Повторіть новий пароль"
              value={userData.repeatPassword}
              onChange={(e) => handleInputChange('repeatPassword', e.target.value)}
            />
          </Styles.FormGroup>
          </Styles.FormGroupPasswordWrapper>

          <Styles.Button type="submit">Зберегти</Styles.Button>

          {notification && <Styles.Notification>{notification}</Styles.Notification>}
        </form>
      </div>
    </Styles.Modal>
  );
};

export default SettingModal;

