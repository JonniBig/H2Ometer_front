import axios from 'axios';

const waterTrackerInstance = axios.create({
  baseURL: 'https://h2ometer.onrender.com',
});

export const setToken = token => {
  waterTrackerInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegister = async formData => {
  const { data } = await waterTrackerInstance.post('/users/signup', formData);
  setToken(data.token);
  return data;
};

export const requestLogin = async formData => {
  const { data } = await waterTrackerInstance.post('/users/signin', formData);
  setToken(data.token);
  return data;
};

export const requestWaterData = async formData => {
  const { data } = await waterTrackerInstance.post(
    '-/-users-/-signin',
    formData
  );
  return data;
};
