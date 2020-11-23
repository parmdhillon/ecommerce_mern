import { createStore, combineReducers, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import {
  productDetailReducer,
  productListReducer,
} from './reducers/productsReducer';

const initialState = {};

const middlewares = [thunk];

export const store = createStore(
  combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
