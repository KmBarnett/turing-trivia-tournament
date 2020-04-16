import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './../Login/Login.js'


class App extends Component {

  render() {
    return (
      <main className="App">
        <Route exact path='/' >
          <Login />
        </Route>
      </main>
    );
  }
}

export default App;
