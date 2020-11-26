import { createStore, combineReducers, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';

import {
  productDetailReducer,
  productListReducer,
} from './reducers/productsReducer';

import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
} from './reducers/userReducer';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};

const middlewares = [thunk];

export const store = createStore(
  combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
