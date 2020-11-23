import * as actionTypes from '../actionTypes/productActionTypes';
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_REQ:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: false,
      };
    case actionTypes.PRODUCT_LIST_FAIL:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export const productDetailReducer = (
  state = { product: [{ reviews: {} }] },
  action
) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DETAIL_REQ:
      return {
        loading: true,
        ...state,
      };
    case actionTypes.PRODUCT_DETAIL_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        error: false,
      };
    case actionTypes.PRODUCT_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
        ...state,
      };

    default:
      return state;
  }
};
