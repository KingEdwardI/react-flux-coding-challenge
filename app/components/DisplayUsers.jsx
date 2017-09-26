import React from 'react';
import { Container } from 'flux/utils';

import AppStore from '../stores/AppStore';
import UserDisplay from './UserDisplay';

class _DisplayUsers extends React.Component {
  static getStores() {
    return [AppStore];
  }

  static calculateState() {
    return {
      users: AppStore.getState()
    };
  }

  render() {
    let users = this.state.users.map(user => { 
      return (
        <UserDisplay
          fName={ user.firstName }
          lName={ user.lastName }
          addr={ user.address }
          id={ user.id }
          key={ user.id }
        />
      );
    });

    return (
      <div>
        {users.length ? users : 'Please add Users for display'}
      </div>
    );
  }
}

const DisplayUsers = Container.create(_DisplayUsers);
export default DisplayUsers;
