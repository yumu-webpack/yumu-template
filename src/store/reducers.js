import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducers = asyncReducers =>
  combineReducers({
    routerReducer,
    ...asyncReducers,
  });

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(reducers(store.asyncReducers));
};

export default reducers;
