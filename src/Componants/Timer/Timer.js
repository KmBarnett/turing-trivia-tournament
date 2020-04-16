import Timer from 'react-compound-timer'
import React, { Component } from 'react';
import './Timer.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class GameTimer extends Component {
  constructor() {
    super()
    this.state = {
      active: false,
      redirectPath: '/game/start'
    }
  }
  endGame = () => {
    this.setState({redirectPath: '/game/end'})
  }

  startTimer() {
    this.setState({active: true})
  }

  render() {
    const startTime = 60000;
    const { active, redirectPath } = this.state
    return (
      <div className='Timer'>
        <div className={'animated-timer' + (active && ' timer-started')}></div>
        <Redirect to={redirectPath}/>
        <div className='timer-display'>
          <Timer
            initialTime={ startTime }
            lastUnit="s"
            direction="backward"
            checkpoints={[
              {
                time: 0,
                callback: () => this.endGame(),
              },
              {
                time: startTime - 1,
                callback: () => this.startTimer(),
              },
            ]}
            >
            {() => (
              <React.Fragment>
                <Timer.Seconds />
              </React.Fragment>
            )}
          </Timer>
        </div>
      </div>
    );

  }
}

export default connect(null, null)(GameTimer);
