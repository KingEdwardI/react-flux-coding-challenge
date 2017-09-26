import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from './components/Main';

injectTapEventPlugin();

const muiTheme = getMuiTheme({});

render((
  <MuiThemeProvider muiTheme={ muiTheme }>
    <Router>
      <div>
        <Route exact path="/" component={ Main } />
      </div>
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'));
