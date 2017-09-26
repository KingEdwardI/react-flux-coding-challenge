import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import { List, ListItem } from 'material-ui/List';
import { render } from 'react-dom';
import { Container } from 'flux/utils';
import { Link } from 'react-router-dom'

import SampleStore from '../stores/AppStore';
import DisplayUsers from './DisplayUsers.jsx';
import AddUser from './AddUser.jsx';

class _Main extends React.Component {
  static getStores() {
    return [SampleStore];
  }

  static calculateState() {
    return {
      sample: SampleStore.getState()
    };
  }

  render() {
    return (
      <div>
        <AppBar title="React Flux Users Challenge" />
        { /*
            * <List>
              *   <ListItem><Link to="/add_user">Add User</Link> | <Link to="/users">Users</Link></ListItem>
              * </List>
            */ }
        <h1> Add User </h1>
        <AddUser />
        <hr/>
        <h1> Users </h1>
        <DisplayUsers />
      </div>
    );
  }
}

const Main = Container.create(_Main);
export default Main;
