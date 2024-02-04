export const selectWaterData = state => state.calendar.data;
export const selectWaterProgressData = state => state.calendar.progressData;
export const selectWaterEditingPortionId = state =>
  state.calendar.selectedEditingPortionId;
export const selectWaterDataIsLoading = state => state.calendar.isLoading;
export const selectWaterDataError = state => state.calendar.error;
