import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Container } from 'flux/utils';

import AppStore from '../stores/AppStore';
import DisplayUsers from './DisplayUsers';
import AddUser from './AddUser';

class _Main extends React.Component {
  static getStores() {
    return [AppStore];
  }

  static calculateState() {
    return {
      nextId: AppStore.getState().length,
      isAddingUser: false
    };
  }

  render() {
    return (
      <div>
        <AppBar title="React Flux Users Challenge" />
        <div className="main">
          <h1>
            Add User
            { !this.state.isAddingUser ? 
              <span onClick={ () => { this.setState({ isAddingUser : !this.state.isAddingUser }); } }> + </span>
              :
              <span onClick={ () => { this.setState({ isAddingUser : !this.state.isAddingUser }); } }> - </span>
            }
          </h1>
          { this.state.isAddingUser ?
            <AddUser id={ this.state.nextId } />
            :
            ''
          }
          <hr />
          <h1> Users </h1>
          <DisplayUsers />
        </div>
      </div>
    );
  }
}

const Main = Container.create(_Main);
export default Main;
