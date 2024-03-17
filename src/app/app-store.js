import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { baseApi } from './base-api';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});
