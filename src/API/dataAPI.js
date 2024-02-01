import { instance } from './authAPI';

export const fetchTodayAPI = async () => {
  const { data } = await instance.get('/today');
  return data;
};

export const fetchMonthAPI = async monthNumber => {
  const { data } = await instance.get(`/month/${monthNumber + 1}`);
  return data;
};

export const addWaters = async newWaterUsed => {
  const { data } = await instance.post('/water', newWaterUsed);
  return data;
};

export const deleteEntry = async waterId => {
  await instance.delete(`/water/${waterId}`);
};

export const editWaters = async ({ newWaterUsed, id }) => {
  const { data } = await instance.patch(`/water/${id}/waterVolume`,
    newWaterUsed
  );
  return data;
};
