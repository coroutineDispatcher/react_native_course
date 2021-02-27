import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/products-reducer';
import ShopNavigator from './navigation/ShopNavigator';
import cardReducer from './store/reducers/card-reducer'

const rootReducer = combineReducers({
  products: productsReducer,
  card: cardReducer
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
