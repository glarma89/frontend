import { configureStore } from '@reduxjs/toolkit';
import authReducer from './sliceGPT';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;