import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './../Login/Login.js'
import Instructions from './../Instructions/Instructions.js'
import Question from './../../Containers/Question/Question.js'
import End from './../End/End.js'



function App() {
  return (
    <main className="App">
      <Route exact path='/' >
        <Login />
      </Route>
      <Route exact path='/game' >
        <Instructions />
      </Route>
      <Route exact path='/game/start' >
        <Question />
      </Route>
      <Route path='/game/end' >
        <End />
      </Route>
    </main>
  );
}



export default App;
