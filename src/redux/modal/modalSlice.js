import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalData: null,
  isOpenModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpenModal = true;
      state.modalData = action.payload;
    },
  },
});

export const { openModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
