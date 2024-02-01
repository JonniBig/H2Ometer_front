import axios from 'axios';

const waterTrackerInstance = axios.create({
  baseURL: 'https://h2ometer.onrender.com',
});

export const setToken = token => {
  waterTrackerInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  waterTrackerInstance.defaults.headers.common.Authorization = '';
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

export const requestLogout = async () => {
  const { data } = await waterTrackerInstance.post('/users/logout');
  clearToken();
  return data;
};

export const requestRefreshUser = async () => {
  const { data } = await waterTrackerInstance.get('/users/current');

  return data;
};

export const requestWaterData = async (day, month) => {
  const { data } = await waterTrackerInstance.get(
    `/api/water-data?day=${day}&month=${month}&`
  );
  return data;
};
