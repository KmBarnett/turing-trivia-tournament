import React from 'react';
import './Winner.css';
import { connect } from 'react-redux';
import { ReactComponent as Badge } from './assets/icon.svg'
import converter from 'number-to-words';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti'
import PropTypes from 'prop-types';


function Winner(props) {
  
    const { game, place } = props
    const { cohort, name, score, time, correctAnswers } = game;
    const podium = [1,2,3]

    let program;
    if (cohort) {
      program = cohort.includes('BE') ? '#EF3752' : '#F9AD03';
    }
    return (
      <section className='Winner'>
          {podium.includes(place) && <Confetti />}
        <svg className='svg-wrapper' style={{fill: `${program}`}}>
          <Badge />
        </svg>
        <h3 data-testid='place'>{converter.toOrdinal(place)}</h3>
        <ul data-testid='stats'>
          <li> Name: {name}</li>
          <li> Score: {score}</li>
          <li> Time: {time}</li>
          <li> Grade: {correctAnswers}</li>
        </ul>
        <Link to='/game/end/leaderboard'>
          <button data-testid='continue'>Continue</button>
        </Link>
      </section>
    );
}

const showPlace = (scores, myScore) => {
  const leaders = [...scores]
  leaders.sort((a,b) => b.score - a.score)
  return leaders.indexOf(myScore) + 1
}


const mapStateToProps = state => ({
  game: state.scores[0] || {},
  place: showPlace(state.scores, state.scores[0]),
})


export default connect(mapStateToProps, null)(Winner);

Winner.propTypes = {
  game: PropTypes.object,
  place: PropTypes.number
}
