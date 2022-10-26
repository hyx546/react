import React, { useEffect, useState } from 'react';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import './App.css';
import { numberReducer } from './pages/reducers';
import { InfoReducer } from './pages/reducers/index';
import { logMiddleWare } from './middleWare/index';
import { Provider } from 'react-redux';
import Index from './pages/Home';
import { InfoReducerActionEnum } from './pages/reducers/indexTypes';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import ListIndex from './pages/List/index';
import MyIndex from './pages/My';
import PostIndex from './pages/Post';
import { getRootPermission } from './routes';
import NoPermissionIndex from './pages/NoPermission';
import { PermissionRouter } from './routes/permissionRouter';

const rootMiddleWare = applyMiddleware(logMiddleWare);

const rootReducer = combineReducers({ number: numberReducer, info: InfoReducer });

const rootState = { number: 1, info: { name: null } };

const Store = legacy_createStore(rootReducer, rootState, rootMiddleWare);

export const Permission = React.createContext([]);

function App() {
  const [rootPermission, setRootPermission] = useState([]);

  useEffect(() => {
    Store.dispatch({ type: InfoReducerActionEnum.SET, payLoad: { name: "alien", mes: 'hello' } });

    getRootPermission().then(res => {
      const { code, data } = res as any;
      code === 200 && setRootPermission(data);
    });
  }, []);
  return (
    <Provider store={Store}>
      <Permission.Provider value={rootPermission}>
        <Router>
          <Switch>
            <PermissionRouter path='/home' component={Index} />
            <PermissionRouter path='/list' component={ListIndex} />
            <PermissionRouter path='/my' component={MyIndex} />
            <PermissionRouter path='/post/:id' component={PostIndex} />
            <PermissionRouter path='/noPermission' component={NoPermissionIndex} />
          </Switch>
        </Router>
      </Permission.Provider>

    </Provider>
  );
}

export default App;
