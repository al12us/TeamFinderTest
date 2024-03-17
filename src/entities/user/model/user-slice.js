import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { token: null, isAuthorized: false },
  reducers: {
    setCredentials: (state, { payload: { token } }) => {
      state.token = token;
      state.isAuthorized = true;
    },
    clearUserData: (state) => {
      state.token = null;
      state.isAuthorized = false;
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
