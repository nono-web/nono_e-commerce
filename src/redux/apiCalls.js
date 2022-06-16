import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutFailure,
  logoutStart,
  logoutSuccess,
} from './userRedux';
import { publicRequest } from '../requestMethods';




export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
    console.log('userSuccess', user)
  } catch (err) {
    dispatch(loginFailure());
  }
};


export const logout = async (dispatch, user) => {
  try {
    console.log('user', user)
    const res = await publicRequest.post('/auth/logout',{currentUser: user});
    dispatch(logoutSuccess(res.data));
    console.log('logout', res.data);
  } catch (err) {
    dispatch(logoutFailure());
    console.log('redux', err);
  }
};
