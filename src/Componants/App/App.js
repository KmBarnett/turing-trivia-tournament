import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './../Login/Login.js'
import Instructions from './../Instructions/Instructions.js'


class App extends Component {

  render() {
    return (
      <main className="App">
        <Route exact path='/' >
          <Login />
        </Route>
        <Route exact path='/game' >
          <Instructions />
        </Route>
      </main>
    );
  }
}

export default App;
