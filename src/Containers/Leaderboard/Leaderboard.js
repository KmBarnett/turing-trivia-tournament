import React from 'react';
import './Leaderboard.css';


function Leaderboard({ data, display }) {
  let entries;

  function createSpot({name, score, cohort, time, index}) {
    let program;
    if (cohort) {
      program = cohort.includes('BE') ? 'BE' : 'FE';
    }
    return <li key={index} className={program}> {name}: {Math.trunc(score)} Time: {time}</li>
  }

  if (display !== 'cohorts') {
    const anon = {cohort: '', score: 1000, name:'Alan Turing', time: 60}
    const leadScafold = new Array(10);
    leadScafold.fill({...anon}, 0, 10)
    const sortedData = [...data, ...leadScafold].sort((a,b) => b.score - a.score)
    entries = sortedData.slice(0, 10).map((entry, index) => {
      return createSpot({... entry, index})})
  } else {
    console.log(data);
    const sortedData = [...data].sort((a,b) => b.score - a.score)
    entries = sortedData.slice(0, 10).map((entry, index) => {
      return createSpot({... entry, index})})
  }



    return (
      <section>
        <ol>
          {entries}
        </ol>
      </section>
    );
}


export default Leaderboard;
