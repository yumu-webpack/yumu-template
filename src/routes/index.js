/**
 * 定义应用路
 */
import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import routerConfig from './routerConfig';
import { injectReducer } from '../store/reducers';

/**
 * 将路由信息扁平化，继承上一级路由的 path
 * @param {Array} config 路由配置
 */
function recursiveRouterConfigV4(config = []) {
  const routeMap = [];
  config.forEach((item) => {
    const route = {
      path: item.path,
      component: item.component,
      onEnter: item.onEnter,
      reducer: item.reducer
    };
    if (Array.isArray(item.children)) {
      route.childRoutes = recursiveRouterConfigV4(item.children);
    }
    routeMap.push(route);
  });
  return routeMap;
}
const renderRouterConfigV4 = (router, contextPath) => (store) => {
  const routeChildren = [];
  const renderRoute = (routeContainer, routeItem, routeContextPath) => {
    const { path, onEnter, component, childRoutes, reducer } = routeItem;
    let routePath;
    if (!path) {
      console.error('route must has `path`');
    } else if (path === '/' || path === '*') {
      routePath = path;
    } else {
      routePath = `/${routeContextPath}/${path}`.replace(/\/+/g, '/');
    }

    // reducer处理
    if (reducer) {
      injectReducer(store, reducer);
    }

    if (component || onEnter) {
      routeChildren.push(
        <Route
          key={routePath}
          exact
          path={routePath}
          render={(props) => {
            let redirectTo = null;
            if (typeof onEnter === 'function') {
              redirectTo = onEnter(props);
            }
            if (redirectTo) {
              return (<Redirect to={redirectTo} />);
            }

            return React.createElement(component, props);
          }}
        />
      );
    }

    // 存在子路由，递归当前路径，并添加到路由中
    if (Array.isArray(childRoutes)) {
      childRoutes.forEach((r) => {
        renderRoute(routeContainer, r, routePath);
      });
    }
  };

  router.forEach((r) => {
    renderRoute(null, r, contextPath);
  });

  return <Switch>{routeChildren}</Switch>;
};

const routerWithReactRouter4 = recursiveRouterConfigV4(routerConfig);
const getRouters = renderRouterConfigV4(routerWithReactRouter4, '/');
export default getRouters;
