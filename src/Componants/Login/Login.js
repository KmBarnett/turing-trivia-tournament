import React, {Component} from 'react';
import './Login.css';
import {logIn, setCategory, getCategories} from '../../actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import uniqid from 'uniqid';
import { fetchCategories } from '../../apiCalls.js'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqid(),
      name: '',
      cohort: undefined,
      program: undefined,
      play: false
    }
  }

  async componentDidMount() {
    this.props.getCategories(await fetchCategories())
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm = (e) => {
    const {name, cohort, program, id} = this.state
    e.preventDefault();
    this.props.logIn({
      id,
      name,
      cohort: cohort + program
    })
    this.setState({play: true})
  }

  render() {
    const {name, cohort, program, play} = this.state
    const filledOut = (name && cohort && program)
    const redirectPath = play
      ? '/game'
      : '/';

    return (<form onSubmit={this.submitForm} className='log-in-form'>
      <Redirect to={redirectPath}/>
      <label htmlFor='name-input'>Name:
        <input id='name-input' type='text' name='name' className='login-input' value={this.state.name} placeholder='Your Name' onChange={(e) => this.handleChange(e)} required="required"/>
      </label>
      <label htmlFor='program'>Program:
        <select data-testid="select-program" id="program-input" name='program' className='login-input' value={this.state.program} onChange={this.handleChange} required="required" defaultValue='pick program'>
          <option disabled="disabled" hidden="hidden" value="pick program">Pick Program</option>
          <option value="BE">BE</option>
          <option value="FE">FE</option>
        </select>
      </label>
      <label htmlFor='cohort-input'>Cohort:
        <select data-testid="select-cohort" id="cohort-input" name='cohort' className='login-input' value={this.state.cohort} onChange={this.handleChange} required="required" defaultValue='pick cohort'>
          <option disabled="disabled" hidden="hidden" value="pick cohort">Pick Cohort</option>
          <option value="1909">1909</option>
          <option value="1911">1911</option>
          <option value="2001">2001</option>
          <option value="2003">2003</option>
        </select>
      </label>
      <label htmlFor='category-input'>Category:
        <select data-testid="select-category" id="category-input" name='category' className='login-input' onChange={(e) => this.props.setCategory(e.target.value)} defaultValue={2116}>
          {this.props.categories.map(cata =>
            <option key={cata.id} value={cata.id}>{cata.name}</option>)}
        </select>
      </label>
      <button data-testid='submit' disabled={!filledOut} type="submit">
        Let's Play
      </button>
    </form>)
  }
}

const mapDispatchToProps = dispatch => ({
  logIn: (user) => {
    dispatch(logIn(user))
  },
  getCategories: (categories) => {
    dispatch(getCategories(categories))
  },
  setCategory: (category) => {
    dispatch(setCategory(category))
  }
})

const mapStateToProps = state => ({categories: state.categories})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
}
