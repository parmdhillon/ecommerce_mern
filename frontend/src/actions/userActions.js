import Axios from 'axios';
import * as actionTypes from '../actionTypes/userActionTypes';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_LOGIN_REQ });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await Axios.post(
      '/api/users/login',
      { email, password },
      config
    );

    dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: actionTypes.USER_LOGOUT });
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_REGISTER_REQ });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await Axios.post(
      '/api/users',
      { name, email, password },
      config
    );

    dispatch({ type: actionTypes.USER_REGISTER_SUCCESS, payload: data });

    dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.USER_DETAILS_REQ });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await Axios.get(`/api/users/${id}`, config);

    dispatch({ type: actionTypes.USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.USER_UPDATE_PROFILE_REQ });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await Axios.put(`/api/users/profile`, user, config);

    dispatch({
      type: actionTypes.USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
