import {createSlice} from '@reduxjs/toolkit';
import {usersApi} from '../../services/userApiSlice';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: undefined,
    vehicles: [],
  },
  reducers: {
    addLoginUser: (state, {payload}) => {
      console.log('ACTION PAYLOAD', payload);
      state.userData = payload.data.user;
    },
  },
  extraReducers: builder => {
    // builder.addMatcher(
    //   usersApi.endpoints.loginUser.matchFulfilled,
    //   (state, {payload}) => {
    //     console.log('ACTION PAYLOAD', payload);
    //     state.userData = payload.data.user;
    //   },
    // );
    // builder.addCase(
    //   usersApi.endpoints.loginUser.matchFulfilled,
    //   (state, {payload}) => {
    //     state.userData = payload.data.user;
    //   },
    // );
  },
});

export const {addLoginUser} = authSlice.actions;

export default authSlice.reducer;
