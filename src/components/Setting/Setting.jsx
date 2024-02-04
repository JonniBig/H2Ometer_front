import React, { useState } from 'react';
import * as Styles from './ModalStyles';

const SettingModal = () => {
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
    // Photo upload logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here

    // Example: Displaying an error notification
    setNotification("Failed to update user data. Please try again.");
  };

  return (
    <Styles.Modal className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <Styles.FormGroup>
            <label htmlFor="photo">Your photo</label>
            <input type="file" id="photo" accept="image/*" onChange={handlePhotoChange} />
            <button type="button" onClick={uploadPhoto}>
              Upload photo
            </button>
          </Styles.FormGroup>

          <Styles.FormGroup>
            <label>Your gender identity</label>
            <Styles.RadioButtonGroup>
              <label htmlFor="male">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={() => handleInputChange('gender', 'male')}
                />
                Woman
              </label>

              <label htmlFor="female">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={() => handleInputChange('gender', 'female')}
                />
                Man
              </label>
              {/* Add more gender options as needed */}
            </Styles.RadioButtonGroup>
          </Styles.FormGroup>

          <Styles.FormGroup>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={userData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </Styles.FormGroup>

          <Styles.FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={userData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </Styles.FormGroup>

          <Styles.FormGroup>
            <label htmlFor="oldPassword">Password:</label>
            <input
              type="password"
              id="oldPassword"
              placeholder="Old password, current password"
              value={userData.oldPassword}
              onChange={(e) => handleInputChange('oldPassword', e.target.value)}
            />

            <label htmlFor="newPassword">New password:</label>
            <input
              type="password"
              id="newPassword"
              placeholder="New password"
              value={userData.newPassword}
              onChange={(e) => handleInputChange('newPassword', e.target.value)}
            />

            <label htmlFor="repeatPassword">Repeat new password:</label>
            <input
              type="password"
              id="repeatPassword"
              placeholder="Repeat new password"
              value={userData.repeatPassword}
              onChange={(e) => handleInputChange('repeatPassword', e.target.value)}
            />
          </Styles.FormGroup>

          <Styles.Button type="submit">Save</Styles.Button>

          {notification && <Styles.Notification>{notification}</Styles.Notification>}
        </form>
      </div>
    </Styles.Modal>
  );
};

export default SettingModal;
