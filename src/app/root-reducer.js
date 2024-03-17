import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from './base-api';
import { userSlice } from 'src/entities/user';

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [userSlice.name]: userSlice.reducer,
});
