import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './../Login/Login.js'
import Instructions from './../Instructions/Instructions.js'
import Question from './../../Containers/Question/Question.js'
import { getQuestions } from '../../actions';


class App extends Component {

 async componentDidMount() {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&encode=url3986')
      const date = await response.json()
      this.props.getQuestions(await date.results)
      }
    catch(error) {
      console.error(error);
    }
  }

  render() {
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
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (questions) => dispatch(getQuestions(questions))
})

export default connect(null, mapDispatchToProps)(App);
