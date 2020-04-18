import Timer from 'react-compound-timer'
import React, { Component } from 'react';
import './Timer.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logTime } from '../../actions';


class GameTimer extends Component {
  constructor() {
    super()
    this.state = {
      redirectPath: '/game/start'
    }
  }
  endGame = () => {
    this.setState({redirectPath: '/game/end'})
  }

  trackTime(second) {
    this.props.logTime(second);
  }

  createCheckpoints() {
    const checkpoints = []
    for (let i = 60000; i > 0; i -= 1000) {
      checkpoints.push({
        time: i,
        callback: () => this.trackTime(i/1000 - 1),
      })
    }
    return checkpoints
  }

  render() {
    const startTime = 60000;
    const { active, redirectPath } = this.state
    return (
      <div className='Timer'>
        <div className='animated-timer timer-started'></div>
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
              ...this.createCheckpoints()
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

const mapDispatchToProps = dispatch => ({
  logTime: (time) => dispatch(logTime(time))
})

export default connect(null, mapDispatchToProps)(GameTimer);
