import React from 'react';

import UserActionCreators from '../actions/UserActionCreators';

class UserDisplay extends React.Component {

  state = {
    fName: this.props.fName,
    lName: this.props.lName,
    addr: this.props.addr,
    id: this.props.id,
    updating: false
  };


  handleDelete = () => {
    UserActionCreators.deleteUser(this.state.id);
  }

  // update the user and switch out of 'updating' mode
  handleUpdate = () => {
    UserActionCreators.updateUser({
      firstName: this.state.fName,
      lastName: this.state.lName,
      address: this.state.addr,
      id: this.state.id,
    });
    this.setState({ updating: false });
  }

  // cancel the update and reset the state
  handleCancel = () => {
    this.setState({
      updating: false,
      fName: this.props.fName,
      lName: this.props.lName,
      addr: this.props.addr,
    }); 
  }

  render() {
    let { updating } = this.state;
    // render for display
    if (!updating) {
      let { fName, lName, addr } = this.props;
      return (
        <div className="userDisplay">
          <p>{fName}</p>
          <p>{lName}</p>
          <p>{addr}</p>
          <button onClick={ () => {this.setState({ updating : true });} }> MANAGE </button>
    
        </div>
      );
    // render for update
    } else {
      let { fName, lName, addr } = this.state;
      return (
        <div className="userDisplay">
          <input
            type="text"
            placeholder="firstname"
            value={ fName }
            onChange={ (evt) => { this.setState({ fName: evt.target.value }); } }
          />
          <br />
          <input
            type="text"
            placeholder="lastname"
            value={ lName }
            onChange={ (evt) => { this.setState({ lName: evt.target.value }); } }
          />
          <br />
          <input
            type="text"
            placeholder="address"
            value={ addr }
            onChange={ (evt) => { this.setState({ addr: evt.target.value }); } }
          />
          <br />
          <br />
          <button onClick={ () => { this.handleDelete(); } }> DELETE </button>
          <br />
          <button onClick={ () => { this.handleCancel(); } }> CANCEL </button>
          <br />
          <button onClick={ () => { this.handleUpdate(); } }> SAVE </button>
        </div>
      );

    }
  }
}

export default UserDisplay;
