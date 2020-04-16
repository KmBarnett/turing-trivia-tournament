import React, { Component } from 'react';
import './Login.css';
import { logIn } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cohort: '',
    }
  }

  render() {
    const { name, cohort } = this.state
    const filledOut = (name && cohort)
    return (
      <form onSubmit={this.submitForm} className='log-in-form' >
        <label htmlFor='name-input'>Name:
          <input
            id='name-input'
            type='text'
            name='name'
            className='login-input'
            value={this.state.name}
            placeholder='Your Name'
            onChange={this.handleChange}
            required
            />
        </label>
        <label htmlFor='cohort-input'>Cohort:
          <select
            id="cohort-input"
            name='cohort'
            className='login-input'
            value={this.state.password}
            placeholder='Your password'
            onChange={this.handleChange}
            required
            defaultValue='pick cohort'
            >
            <option disabled hidden value="pick cohort">Pick Cohort</option>
            <option value="1909">1909</option>
            <option value="1911">1911</option>
            <option value="2001">2001</option>
            <option value="2003">2003</option>
          </select>
        </label>
        <Link to='/game'>
          <button disabled={!filledOut} type="submit" >
            Let's Play
          </button>
        </Link>
      </form>
    )
  }
}

export default Login;
