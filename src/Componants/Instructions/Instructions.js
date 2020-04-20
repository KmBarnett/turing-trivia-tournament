import React, { Component } from 'react';
import './Instructions.css';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { getQuestions } from '../../actions';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../apiCalls.js'


class Instructions extends Component {

  async componentDidMount() {
    const { category } = this.props
    const base = 'https://opentdb.com/api.php?amount=10&encode=url3986'
    const url = category !== 2116 ? `${base}&category=${category}`: base
     this.props.getQuestions(await fetchQuestions(url))

   }

  render() {
    const { user, questionsLoaded } = this.props
    const redirectPath = user.name ? '/game' : '/';
    const loading = !questionsLoaded ? 'loading' : 'loaded'
      return (
        <article className='Instructions'>
          <Redirect to={redirectPath}/>
          <p className='welcome'> Welcome,</p>
          <p className='message'><span>{user.name}!!!</span>, Welcome, to the VAULT!! TURING TRIVA Starts now,(actually when you hit start) prove your worth, Claim your spot in history!!</p>
          <ul>
            <li>You will have 60 seconds to answer 10 questions</li>
            <li>Each question is worth 100pts</li>
            <li>A multiplier (Time Remaining/25) will be applied for speed</li>
          </ul>
          <Link className='button-container' to='/game/start'>
            <button className={loading} disabled={!questionsLoaded}>Start</button>
          </Link>
        </article>
      );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  questionsLoaded: state.questions.length > 0,
  category: state.category
})

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (questions) => dispatch(getQuestions(questions))
})

export default connect(mapStateToProps, mapDispatchToProps)(Instructions);

Instructions.propTypes = {
  user: PropTypes.shape({
    cohort: PropTypes.string,
    name: PropTypes.string,
  })
}
