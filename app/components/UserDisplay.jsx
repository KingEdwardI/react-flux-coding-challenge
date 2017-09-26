import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom'

class UserDisplay extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  state = {
  }

  handleClick = (event) => {
    console.log(event);
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>{this.props.title}</p>
        <div onClick={this.handleClick}></div>
        <div><Link to="/">Top</Link></div>
        <div><Link to="/sample1">Sample1</Link></div>
        <div><Link to="/sample2">Sample2</Link></div>
      </div>
    );
  }
}

export default UserDisplay;
