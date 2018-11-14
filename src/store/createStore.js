import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import history from 'history/createBrowserHistory';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const routeMiddleware = routerMiddleware(history());
const middlewares = [routeMiddleware, thunkMiddleware];
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  enhancers.push(window.devToolsExtension ? window.devToolsExtension() : f => f);
}

const createStoreIns = (initialState = {}) => {
  const store = createStore(
    reducers(),
    initialState,
    compose(applyMiddleware(...middlewares), ...enhancers)
  );

  store.asyncReducers = {};

  return store;
};

const store = createStoreIns();

export default store;
