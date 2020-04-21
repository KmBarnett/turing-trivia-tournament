import React from 'react';
import './Leaderboard.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut, clearAnswers } from '../../actions';
import converter from 'number-to-words';
import PropTypes from 'prop-types';


function Leaderboard(props) {
  let entries;

  function createSpot({name, score, cohort, time, index, category}) {
    let program;
    if (cohort) {
      program = cohort.includes('BE') ? 'BE' : 'FE';
    }
    if (!name) {
    return  <li key={index}> {converter.toOrdinal(index + 1)}: </li>
    }
    return <li
      key={index}
      className={`${program} placed`}>
        {converter.toOrdinal(index + 1)}:
      <section className='table-rows'>
        <p>
          {name}
        </p>
        <p>
          {score}
        </p>
        {time}Sec
        <p>
          {category}
        </p>
        <p>
          {cohort}
        </p>
      </section>
    </li>
  }

  function runDispatch() {
    props.logOut()
    props.clearAnswers()
  }

    const leadScafold = new Array(10);
    const sortedData = [...props.scores, ...leadScafold].sort((a,b) => b.score - a.score)
    entries = sortedData.slice(0, 10).map((entry, index) => {
      return createSpot({...entry, index})})


    return (
      <section className='Leaderboard'>
        <ol>
          <li>
            <section className='table-heads'>
              <h3>Name</h3>
              <h3>Score</h3>
              <h3>Time</h3>
              <h3>Category</h3>
              <h3>Cohort</h3>
            </section>
          </li>
          {entries}
        </ol>
        <Link to='/'>
          <button onClick={runDispatch} type='button'>New Game</button>
        </Link>
      </section>
    );
}


const mapStateToProps = state => ({
  scores: state.scores,
})

const mapDispatchToProps = dispatch => ({
  logOut: () => { dispatch( logOut() ) },
  clearAnswers: () => { dispatch( clearAnswers() ) }
})


export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);

Leaderboard.propTypes = {
  scores: PropTypes.array,
  clearAnswers: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
}
