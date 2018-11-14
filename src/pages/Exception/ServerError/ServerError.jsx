import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ServerError.less';

export default class ServerError extends Component {
  static displayName = 'ServerError';

  render() {
    return (
      <div className="server-error">
        <div className="exception-content">
          <div className="prompt">
            <h3>抱歉，服务器出错了</h3>
            <p>
              服务器出错了，请重新刷新页面或返回<Link className="link-font" to="/">首页</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
