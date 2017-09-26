import React from 'react';

import UserActionCreators from '../actions/UserActionCreators';

class AddUser extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    address: '',
    id: this.props.id,
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({ id: this.state.id + 1 });
    UserActionCreators.addUser(this.state);
  }

  render() {
    return (
      <div className="addUser">
        <form onSubmit={ (evt) => { this.handleSubmit(evt); } }>
          <input
            type="text"
            placeholder="First Name"
            onChange={ (evt) => { this.state.firstName = evt.target.value; } }
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            onChange={ (evt) => { this.state.lastName = evt.target.value; } }
          />
          <br />
          <input
            type="text"
            placeholder="Address"
            onChange={ (evt) => { this.state.address = evt.target.value; } }
          />
          <br />
          <input type="submit" value="Create User" />
        </form>
      </div>
    );
  }
}

export default AddUser;
