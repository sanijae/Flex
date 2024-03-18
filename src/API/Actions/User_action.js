import { UrlBase } from '../URLS';
import {REGISTER_USER,LOGIN_USER,GET_USER,UPDATE_USER,DELETE_USER,ERROR} from '../types'
import axios from 'axios';

export const registerUser = (userData,navigate) => {
  return dispatch => {
    axios.post(UrlBase + '/register', userData)
      .then(res => {
        // Dispatch action after successful registration
        dispatch({
          type: REGISTER_USER,
          payload: res.data
        });
        navigate('/user-account')
        console.log(res.data)
      })
      .catch(err => {
        // Handle registration error
        dispatch({
          type: ERROR,
          payload: err.error
        });
        console.error(err.error);
      });
  };
};

export const loginUser = (userData,navigate) => {
  return async dispatch => {
    await axios.post(UrlBase + '/login', userData)
      .then(res => {
        // Dispatch action after successful login
        dispatch({
          type: LOGIN_USER,
          payload: res.data
        });
        navigate('/user-account')
        console.log(res.data)
      })
      .catch(err => {
        // Handle login error
        dispatch({
          type: ERROR,
          payload: err.error
        });
        console.error(err.error);
      });
  };
};
export const updateUser = (id,userData,navigate) => {
  return dispatch => {
    axios.patch(UrlBase + '/updateUser/'+id, userData)
      .then(res => {
        // Dispatch action after successful login
        dispatch({
          type: UPDATE_USER,
          payload: res.data
        });
        navigate('/user-account')
        console.log(res.data)
      })
      .catch(err => {
        // Handle login error
        dispatch({
          type: ERROR,
          payload: err.error
        });
        console.error(err.error);
      });
  };
};
export const updateUserProfile = (id,userData,navigate) => {
  return dispatch => {
    axios.patch(UrlBase + '/updateProfileImage/'+id, userData)
      .then(res => {
        // Dispatch action after successful login
        dispatch({
          type: UPDATE_USER,
          payload: res.data
        });
        navigate('/user-account')
        console.log(res.data)
      })
      .catch(err => {
        // Handle login error
        dispatch({
          type: ERROR,
          payload: err.error
        });
        console.error(err.error);
      });
  };
};

export const deleteUser = (id,navigate) => {
  return dispatch => {
    axios.delete(UrlBase + '/deleteUser/'+id)
      .then(res => {
        // Dispatch action after successful login
        dispatch({
          type: DELETE_USER,
          payload: res.data
        });
        navigate('/')
        console.log(res.data)
      })
      .catch(err => {
        // Handle login error
        dispatch({
          type: ERROR,
          payload: err.error
        });
        console.error(err.error);
      });
  };
};
export const getUser = (id) => {
  return dispatch => {
    axios.get(UrlBase + '/user/'+id)
      .then(res => {
        // Dispatch action after successful login
        dispatch({
          type: GET_USER,
          payload: res.data
        });
        console.log(res.data)
      })
      .catch(err => {
        // Handle login error
        dispatch({
          type: ERROR,
          payload: err.error
        });
        console.error(err.error);
      });
  };
};

export const logOutUser = (navigate) => {
  try {
    localStorage.removeItem('uid')
    window.location.reload()
    navigate('/')
  } catch (error) {
    console.error(error.message);
  }
};