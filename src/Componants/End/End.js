import React from 'react';
import './End.css';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Leaderboard from '../../Containers/Leaderboard/Leaderboard.js'
import Winner from '../../Containers/Winner/Winner.js'


function End(props) {

  function filterData(filterFor) {
    const { scores, user } = props
    switch (filterFor) {
      case 'my-cohort':
        return scores.filter(entry => user.cohort === entry.cohort)
      case 'cohorts':
        const cohortsScors = scores.reduce((cohorts, score) => {
          cohorts[score.cohort] = cohorts[score.cohort] || {}
          cohorts[score.cohort].score = cohorts[score.cohort].score || 0
          cohorts[score.cohort].time = cohorts[score.cohort].time || 0
          cohorts[score.cohort].name = score.cohort
          cohorts[score.cohort].cohort = score.cohort
          cohorts[score.cohort].score += score.score
          cohorts[score.cohort].time += score.time
          return cohorts
        },{})
        return Object.keys(cohortsScors).map(cohort => cohortsScors[cohort])
      default:
        return scores
    }
  }



  return (
    <section className="End">
      <header>
        <Link to='/game/end/'>
          <button>
            My performance
          </button>
        </Link>
        <Link to='/game/end/all'>
          <button>
            All Time Leaders
          </button>
        </Link>
        <Link to='/game/end/my-cohort' >
          <button>
            Leaders in My Cohort
          </button>
        </Link>
        <Link to='/game/end/cohorts'>
          <button>
            Cohort Leaders
          </button>
        </Link>
      </header>
      <Route
        path="/game/end/:scoresOf"
        render={({ match }) => {
          const { params } = match;
          const { scoresOf } = params
          return <Leaderboard
            data={filterData(scoresOf)}
            display={scoresOf}
          />
        }}
      />
      <Route
        exact
        path="/game/end/"
        render={() => {
          return <Winner
          />
        }}
      />
    </section>
  );
}

const mapStateToProps = state => ({
  user: state.user,
  scores: state.scores
})


export default connect(mapStateToProps, null)(End);
