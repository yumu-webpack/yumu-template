import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as Actions from '../actions';
import './Child.less';

class Child extends React.Component {
  onChange = (e) => {
    this.props.actions.change(e.target.value);
  }

  render() {
    return (
      <div className="page-child">
        <span>redux中的值: {this.props.value}</span>
        <br />
        <input onChange={this.onChange} value={this.props.value} />
        <br />
        <Link to="/"><span style={{ color: '#0044ff' }}>首页</span></Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.home.value
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Child);
