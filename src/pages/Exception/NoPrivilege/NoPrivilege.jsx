import React, { Component } from 'react';
import './NoPrivilege.less';

export default class NoPrivilege extends Component {
  static displayName = 'NoPrivilege';

  render() {
    return (
      <div className="no-privilege">
        <div className="no-privilege-text">抱歉，您暂无访问权限哦~</div>
      </div>
    );
  }
}
