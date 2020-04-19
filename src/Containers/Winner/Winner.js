import React from 'react';
import './Winner.css';
import { connect } from 'react-redux';
import { ReactComponent as Badge } from './assets/icon.svg'


function Winner(props) {
  const { game, bestCategory } = props
  const { cohort, name, score, time } = game;

  let program;
  if (cohort) {
    program = cohort.includes('BE') ? '#EF3752' : '#F9AD03';
  }
    return (
      <section className='Winner'>
        <svg className='svg-wrapper' style={{fill: `${program}`}}>
          <Badge />
        </svg>
        <ul>
          <li> Name: {name}</li>
          <li> Score: {score}</li>
          <li> Time: {time}</li>
          <li> Best Catagory: {bestCategory}</li>
        </ul>
      </section>
    );
}

function findBest(answers) {
  let correct = answers.filter(answer => answer.correct)
  let catagories = correct.map(answer => answer.category)
  let best = [];
  catagories.forEach(category => {
    const bestCategory = catagories.filter(subject => category === subject);
    if (best.length < bestCategory.length) {
      best = bestCategory
    } else if (best.length = bestCategory.length) {

    }
  });

  return best[0]
}

const mapStateToProps = state => ({
  game: state.scores[0] || {},
  bestCategory: findBest(state.answers)
})


export default connect(mapStateToProps, null)(Winner);
