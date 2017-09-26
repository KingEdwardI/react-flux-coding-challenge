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

  handleUpdate = () => {
    UserActionCreators.updateUser({
      firstName: this.state.fName,
      lastName: this.state.lName,
      address: this.state.addr,
      id: this.state.id,
    });
    this.setState({ updating: false });
  }

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
    if (!updating) {
      let { fName, lName, addr } = this.props;
      return (
        <div>
          <p>{fName}</p>
          <p>{lName}</p>
          <p>{addr}</p>
          <button onClick={ () => { this.handleDelete(); } }> DELETE </button>
          <button onClick={ () => {this.setState({ updating : true });} }> UPDATE </button>
    
        </div>
      );
    } else {
      let { fName, lName, addr } = this.state;
      return (
        <div>
          <input
            type="text"
            value={ fName }
            onChange={ (evt) => { this.setState({ fName: evt.target.value }); } }
          />
          <input
            type="text"
            value={ lName }
            onChange={ (evt) => { this.setState({ lName: evt.target.value }); } }
          />
          <input
            type="text"
            value={ addr }
            onChange={ (evt) => { this.setState({ addr: evt.target.value }); } }
          />
          <button onClick={ () => { this.handleDelete(); } }> DELETE </button>
          <button onClick={ () => { this.handleCancel(); } }> CANCEL </button>
          <button onClick={ () => { this.handleUpdate(); } }> SAVE </button>
        </div>
      );

    }
  }
}

export default UserDisplay;
