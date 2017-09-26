import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom'

class UserDisplay extends Component {

  state = {

  }

  handleClick = (event) => {
    console.log(event);
  }

  render() {
    let { fName, lName, addr } = this.props;
    return (
      <div>
        <p>{fName}</p>
        <p>{lName}</p>
        <p>{addr}</p>
      </div>
    );
  }
}

export default UserDisplay;
