import React from 'react';
import './App.css';
import { BrowserRouter as PortalRouter } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';
import Router from './lib/Router';

const App = () => {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Order Portal
          </Typography>
        </Toolbar>
      </AppBar>
      <PortalRouter>
        <Router />
      </PortalRouter>
    </div>
  );
}

export default App;
