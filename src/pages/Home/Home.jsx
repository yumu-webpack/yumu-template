import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from './actions';

import './Home.less';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  onChange2 = (e) => {
    this.props.actions.change(e.target.value);
  }

  render() {
    return (
      <div className="page-home">
        <h1>Home</h1>
        <Link to="/child"><span style={{ color: '#0044ff' }}>home的子页面</span></Link>
        <div>
          <span>改变内部input:</span>
          <input onChange={this.onChange} value={this.state.value} />
          <br />
          <span>内部state.value：</span>
          {this.state.value}
        </div>
        <p>
          <span>改变redux中的state</span>
          <input type="text" onChange={this.onChange2} value={this.props.name} />
          <br />
          <span>redux中的state</span>
          <span>{this.props.name}</span>
        </p>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.home.value
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
