import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';
import { Link } from 'react-router-dom'
import AppStore from '../stores/AppStore';
import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import { List, ListItem } from 'material-ui/List';

class _DisplayUsers extends Component {
  static getStores() {
    return [AppStore];
  }

  static calculateState() {
    return {
      sample: AppStore.getState()
    };
  }

  componentDidMount() {
  }

  render() {
    let shit = this.state.sample.map((x, i) => <div key={i}><p>{ x.one }</p><p>{ x.two }</p></div>)
    return (
      <div>
        <List>
        {shit}
        </List>
      </div>
    );
  }
}

const DisplayUsers = Container.create(_DisplayUsers);
export default DisplayUsers;
