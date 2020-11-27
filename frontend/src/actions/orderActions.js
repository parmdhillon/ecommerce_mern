import Axios from 'axios';
import * as actionTypes from '../actionTypes/orderActionTypes';

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.ORDER_CREATE_REQ });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await Axios.post(`/api/orders`, order, config);

    dispatch({
      type: actionTypes.ORDER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
