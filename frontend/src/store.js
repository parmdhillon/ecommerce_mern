import { createStore, combineReducers, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';

import {
  productDetailReducer,
  productListReducer,
} from './reducers/productsReducer';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

const middlewares = [thunk];

export const store = createStore(
  combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
