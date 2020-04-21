import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import {dataStore } from '../../testingData.js'

import { fetchCategories, fetchQuestions } from '../../apiCalls';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
const testStore = createStore(rootReducer);

jest.mock('../../apiCalls');

function renderApp() {
  return render(
    <Provider store={testStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}

describe('Login', () => {
  fetchCategories.mockResolvedValue(dataStore.categories)
  fetchQuestions.mockResolvedValue(dataStore.questions)
  // NOTE: this dispatch is to prevent first place and confetti err ↓
  dataStore.scoresData.forEach(score => {
    testStore.dispatch(
      {
        type: 'LOG_SCORE',
        scoreData: score
      })
  });


  it('should render the default content', () => {
    const { getByPlaceholderText, getByTestId, debug } = renderApp()
    const nameInput = getByPlaceholderText('Your Name')
    const cohortSelect = getByTestId('select-cohort')
    const programSelect = getByTestId('select-program')
    const categorySelect = getByTestId('select-category')
    const submitButton = getByTestId('submit')

    expect(nameInput).toBeInTheDocument()
    expect(cohortSelect).toBeInTheDocument()
    expect(programSelect).toBeInTheDocument()
    expect(categorySelect).toBeInTheDocument()

    fireEvent.change(nameInput, {target: {value: 'Alan Turing'}});
    fireEvent.change(cohortSelect, {target: {value: '1911'}});
    fireEvent.change(programSelect, {target: {value: 'FE'}});
    fireEvent.click(submitButton)
  });

  it('should see instructions after logging in', () => {
    const { getByPlaceholderText, getByTestId, debug } = renderApp()

    const welcomeMessage = getByTestId('message')
    const instructions = getByTestId('instructions')
    const startBtn = getByTestId('start-btn')

    expect(startBtn).toBeInTheDocument()
    expect(instructions).toBeInTheDocument()
    expect(welcomeMessage).toBeInTheDocument()
    fireEvent.click(startBtn)
  });

  it('should see first question after pressing start', () => {
    const { getByText, getByTestId, debug } = renderApp()

    const questionText = dataStore.questions[0].question
    const question = getByText(questionText)
    const answer1 = getByTestId('answer0')
    const answer2 = getByTestId('answer1')

    expect(question).toBeInTheDocument()
    expect(answer1).toBeInTheDocument()
    expect(answer2).toBeInTheDocument()

    fireEvent.click(answer2)

  });

  it('should see second question after pressing answer', () => {
    const { getByText, getByTestId, debug } = renderApp()

    const questionText = dataStore.questions[1].question
    const question = getByText(questionText)
    const answer1 = getByTestId('answer0')
    const answer2 = getByTestId('answer1')
    const answer3 = getByTestId('answer2')
    const answer4 = getByTestId('answer3')

    expect(question).toBeInTheDocument()
    expect(answer1).toBeInTheDocument()
    expect(answer2).toBeInTheDocument()
    expect(answer3).toBeInTheDocument()
    expect(answer4).toBeInTheDocument()

    fireEvent.click(answer2)
  });

  it('should see game stats after answering all the questions', () => {
    const { getByText, getByTestId, debug } = renderApp()

    const place = getByTestId('place')
    const stats = getByTestId('stats')
    const continueBtn = getByTestId('continue')

    expect(place).toBeInTheDocument()
    expect(stats).toBeInTheDocument()
    expect(continueBtn).toBeInTheDocument()

    fireEvent.click(continueBtn)
  });

  it('should see leaderboard clicking continue', () => {
    const { getByText, getByTestId, debug } = renderApp()

    const leaderboard1st = getByTestId('place0')
    const leaderboard2nd = getByTestId('place1')
    const leaderboard3rd = getByTestId('place2')
    const leaderboard4th = getByTestId('place3')
    const newGameBtn = getByTestId('new-game')

    expect(leaderboard1st).toBeInTheDocument()
    expect(leaderboard2nd).toBeInTheDocument()
    expect(leaderboard3rd).toBeInTheDocument()
    expect(leaderboard4th).toBeInTheDocument()
    expect(newGameBtn).toBeInTheDocument()

    fireEvent.click(newGameBtn)
  });

  it('should see the log in form after clicking new game', () => {
    const { getByPlaceholderText, getByTestId, debug } = renderApp()

    const nameInput = getByPlaceholderText('Your Name')
    const cohortSelect = getByTestId('select-cohort')
    const programSelect = getByTestId('select-program')
    const categorySelect = getByTestId('select-category')

    expect(nameInput).toBeInTheDocument()
    expect(cohortSelect).toBeInTheDocument()
    expect(programSelect).toBeInTheDocument()
    expect(categorySelect).toBeInTheDocument()

  });

})
