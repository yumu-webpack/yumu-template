/**
 * 定义应用路由
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from './utils/history';
import getRouters from './routes';
import store from './store/createStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {getRouters(store)}
        </ConnectedRouter>
      </Provider>
    );
  }
}
