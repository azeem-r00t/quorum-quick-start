import React, { Component } from 'react';

import './App.css';

import SimpleAppBar from './components/AppBar';
import Introduction from './components/Introduction';
import Grid from 'material-ui/Grid/Grid';
import Contract from './components/Contract';
import TransactionForm from './components/TransactionForm';
import NodesGrid from './components/NodesGrid';
  

class App extends Component {
  render() {
    return (
        <div className="App">
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <SimpleAppBar />
            </Grid>
            <Grid item xs={12}>
              <Introduction />
            </Grid>
            <Grid item xs={12}>
              <Contract />
            </Grid>
            <Grid item xs={12}>
              <NodesGrid />
            </Grid>
            <Grid item xs={12}>
              <TransactionForm />
            </Grid>
          </Grid>
          { /* 
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          */ }
        </div>
    );
  }
}

export default App;
