import React from 'react';
import './Instructions.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';


function Instructions(props) {
  const { user } = props
  const redirectPath = user.name ? '/game' : '/';

    return (
      <article className='Instructions'>
        <Redirect to={redirectPath}/>
        <p className='welcome'> Welcome,</p>
        <p className='message'><span>{user.name}</span>, Its Time to participate in the TURING TRIVA TOURNAMENT!!! Prepare to battle it out, prove your worth, to bring glory to the {user.cohort} cohort.</p>
        <ul>
          <li>You will have 60 seconds to answer 10 questions</li>
          <li>Each question is worth 100pts</li>
          <li>A multiplier will be applied for speed</li>
        </ul>
        <Link to='/game/start'>
          <button>Start</button>
        </Link>
      </article>
    );
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps, null)(Instructions);

Instructions.propTypes = {
  user: PropTypes.shape({
    cohort: PropTypes.string,
    name: PropTypes.string,
  })
}
