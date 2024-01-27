import axios from 'axios';

const waterTrackerInstance = axios.create({
    baseURL: 'http://localhost:8000',
  });

  export const setToken = token => {
    waterTrackerInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  export const requestRegister = async formData => {   
    const { data } = await waterTrackerInstance.post('/signup', formData);
    setToken(data.token);
    return data;
  };
  
  export const requestLogin = async formData => {   
    const { data } = await waterTrackerInstance.post('/signin', formData);
    setToken(data.token);
    return data;
  };