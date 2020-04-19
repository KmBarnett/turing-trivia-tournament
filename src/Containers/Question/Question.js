import React from 'react';
import './Question.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameTimer from './../../Componants/Timer/Timer.js'
import { answerQuestion, logScore } from '../../actions';
import { Redirect } from 'react-router-dom';


function Question(props) {
  const { currentQuestion, user, questionsLeft, score, time } = props
  const answersI = Math.floor(Math.random() * 4)
  let redirectPath = '/game/start';
  let answers = [];
  let questionCategory;
  let questionText;
  let correctAnswer

  if (questionsLeft === 0) {
    const multipliedScore = score * (1 + time/25)
    const timeTaken = 60 - time
    props.logScore({score: multipliedScore, name:user.name, cohort: user.cohort, time: timeTaken})
    redirectPath ='/game/end'
  } else if (currentQuestion) {
    const { incorrect_answers, correct_answer, category, question, type} = currentQuestion;
    questionText = question
    questionCategory = category
    correctAnswer = correct_answer
    answers = type !== 'boolean' ? [...incorrect_answers] : ['True', 'False']
    type !== 'boolean' && answers.splice(answersI, 0, correct_answer)
  }
  function pickAwnser(e) {
    const answer = decodeURIComponent(correctAnswer)
    const category = decodeURIComponent(questionCategory)
    const correct = answer === e.target.value;
    props.answerQuestion({correct, category})
  }

  function mapAnswers() {
    return answers.map((answer, index) =>{
      const place = String.fromCharCode(65 + index)
      return (<button
        key ={index}
        type='button'
        onClick ={(e) => pickAwnser(e)}
        value={decodeURIComponent(answer)}
        >
        {place}. {decodeURIComponent(answer)}
      </button>)
    })
  }

    return (
      <article className='Question'>
        <Redirect to={redirectPath}/>
        <header>
          <h1>{user.name} of {user.cohort}</h1>
          <GameTimer />
        </header>
        <h3 className='question-category'>Category:    {decodeURIComponent(questionCategory)}</h3>
        <h2 className='question-text'>{decodeURIComponent(questionText)}</h2>
        <section className='answers'>
          {mapAnswers()}
        </section>
      </article>
    );
  }


const mapStateToProps = state => ({
  user: state.user,
  currentQuestion: state.questions[state.answers.length],
  questionsLeft: state.questions.length - state.answers.length,
  score: state.answers.filter(answer => answer.correct).length * 100,
  time: !(state.questions.length - state.answers.length) && state.time
})

const mapDispatchToProps = dispatch => ({
  answerQuestion: answer => dispatch( answerQuestion(answer) ),
  logScore: scoreData => dispatch( logScore(scoreData) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Question);
