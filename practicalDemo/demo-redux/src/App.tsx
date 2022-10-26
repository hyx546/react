import React, { useEffect } from 'react';
import { applyMiddleware, combineReducers, createStore, legacy_createStore } from 'redux';
import './App.css';
import { numberReducer } from './reducers';
import { InfoReducer } from './reducers/index';
import { logMiddleWare } from './middleWare/index';
import { createStoreHook } from 'react-redux';
import { Provider } from 'react-redux';
import Index from './pages';
import { InfoReducerActionEnum } from './reducers/indexTypes';

const rootMiddleWare = applyMiddleware(logMiddleWare);

const rootReducer = combineReducers({ number: numberReducer, info: InfoReducer });

const rootState = { number: 1, info: { name: null } };

const Store = legacy_createStore(rootReducer, rootState, rootMiddleWare);


function App() {

  useEffect(() => {
    Store.dispatch({ type: InfoReducerActionEnum.SET, payLoad: { name: "alien", mes: 'hello' } });
  }, []);
  return (
    <Provider store={Store}>
      <Index />
    </Provider>
  );
}

export default App;
