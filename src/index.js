import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import App from './App';

// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import './global.less';

// 以下代码 ICE 自动生成, 请勿修改
const NM_CONTAINER = document.getElementById('container');

if (!NM_CONTAINER) {
  throw new Error('当前页面不存在 <div id="container"></div> 节点.');
}

ReactDOM.render(<App />, NM_CONTAINER);
