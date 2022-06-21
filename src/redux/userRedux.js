import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: false,
    isFetching: false,
    error: false,
  },


  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    logoutStart: (state) => {
      state.isFetching = true;
    },
    logoutSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    logoutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  },
});

export const {loginStart, loginSuccess, loginFailure, logoutSuccess, logoutStart, logoutFailure } = userSlice.actions;
export default userSlice.reducer;
