import React, { Component } from 'react';
import './Question.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';


class Question extends Component {
  constructor() {
    super()
    this.state = {
      currentQuestion: '',
      remainingQuestions: 9
    }
  }

  render() {
    return (
      <article className='question'>

      </article>
    );

  }
}

export default connect(null, null)(Question);
