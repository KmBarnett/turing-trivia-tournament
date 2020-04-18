import React, {Component} from 'react';
import './Login.css';
import { logIn } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cohort: undefined,
      program: undefined,
      play: false
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm = (e) => {
    const { name, cohort, program } = this.state
    e.preventDefault();
    this.props.logIn({name, cohort: cohort + program})
    this.setState({play: true})
  }

  render() {
    const {name, cohort, program, play} = this.state
    const filledOut = (name && cohort && program)
    const redirectPath = play ? '/game' : '/';

    return (<form onSubmit={this.submitForm} className='log-in-form'>
      <Redirect to={redirectPath}/>
      <label htmlFor='name-input'>Name:
        <input id='name-input' type='text' name='name' className='login-input' value={this.state.name} placeholder='Your Name' onChange={(e) => this.handleChange(e)} required="required"/>
      </label>
      <label htmlFor='program'>Program:
        <select id="program-input" name='program' className='login-input' value={this.state.program} placeholder='Your Cohort' onChange={this.handleChange} required="required" defaultValue='pick program'>
          <option disabled="disabled" hidden="hidden" value="pick program">Pick Program</option>
          <option value="BE">BE</option>
          <option value="FE">FE</option>
        </select>
      </label>
      <label htmlFor='cohort-input'>Cohort:
        <select id="cohort-input" name='cohort' className='login-input' value={this.state.cohort} placeholder='Your Cohort' onChange={this.handleChange} required="required" defaultValue='pick cohort'>
          <option disabled="disabled" hidden="hidden" value="pick cohort">Pick Cohort</option>
          <option value="1909">1909</option>
          <option value="1911">1911</option>
          <option value="2001">2001</option>
          <option value="2003">2003</option>
        </select>
      </label>
      <button disabled={!filledOut} type="submit">
        Let's Play
      </button>
    </form>)
  }
}

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => {
    dispatch(logIn(user))
  }
})

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  logIn: PropTypes.func.isRequired
}
