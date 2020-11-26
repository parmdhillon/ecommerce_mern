import * as actionTypes from '../actionTypes/userActionTypes';
export const userLoginReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQ:
      return {
        loading: true,
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        error: false,
      };
    case actionTypes.USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_REGISTER_REQ:
      return {
        loading: true,
      };
    case actionTypes.USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        error: false,
      };
    case actionTypes.USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
