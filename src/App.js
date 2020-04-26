import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { gamesReducer } from 'reducers/gamesReducer';
import thunk from 'redux-thunk';
import { Home } from './pages/Home.js';

const reducers = combineReducers(gamesReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
