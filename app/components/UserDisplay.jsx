import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom'

import UserActionCreators from '../actions/UserActionCreators';

class UserDisplay extends Component {

  state = this.props;

  handleDelete = () => {
    UserActionCreators.deleteUser(this.state);
  }

  render() {
    let { fName, lName, addr } = this.state;
    return (
      <div>
        <p>{fName}</p>
        <p>{lName}</p>
        <p>{addr}</p>
        <button onClick={() => { this.handleDelete() }}> DELETE </button>
      </div>
    );
  }
}

export default UserDisplay;
