import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './actions/authAction';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     currentUser: null,
//     loaded: false,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(login.fulfilled, (state) => {
//       state.loaded = true;
//     });
//     builder.addCase(login.rejected, (state) => {
//       state.loaded = false;
//     });
//     builder.addCase(register.fulfilled, (state) => {
//         state.loaded = true;
//     });
//     builder.addCase(register.rejected, (state) => {
//     state.loaded = false;
//     });
//   },
// });

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      currentUser: null,
      loaded: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(login.fulfilled, (state) => {
        state.currentUser = firebase.auth().currentUser;
        state.loaded = true;
      });
      builder.addCase(login.rejected, (state) => {
        state.currentUser = null;
        state.loaded = true;
      });

      builder.addCase(register.fulfilled, (state) => {
        state.currentUser = firebase.auth().currentUser;
        state.loaded = true;
      });
      builder.addCase(register.rejected, (state) => {
        state.currentUser = null;
        state.loaded = true;
      });
    },
  });

export default authSlice.reducer;


