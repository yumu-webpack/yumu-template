import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.less';

export default class NotFound extends Component {
  static displayName = 'NotFound';

  render() {
    return (
      <div className="not-found">
        <div className="not-found-content">
          <div className="prompt">
            <h3>抱歉，你访问的页面不存在</h3>
            <p>
              您要找的页面没有找到，请返回<Link className="link-font" to="/">首页</Link>继续浏览
            </p>
          </div>
        </div>
      </div>
    );
  }
}
