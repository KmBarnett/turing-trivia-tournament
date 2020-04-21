import React from 'react';
import {render, fireEvent } from '@testing-library/react';
import selectEvent from 'react-select-event'
import '@testing-library/jest-dom';
import Instructions from './Instructions';

import {fetchQuestions} from '../../apiCalls.js'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../../reducers';

jest.mock('../../apiCalls');

const testStore = createStore(rootReducer);
function renderLogin() {
  return render(<Provider store={testStore}>
    <BrowserRouter>
      <Instructions />
    </BrowserRouter>
  </Provider>)
}


const questions = [
  {
    category: 'Entertainment: Musicals & Theatres',
    type: 'multiple',
    difficulty: 'medium',
    question: 'When was the play &quot;Macbeth&quot; written?',
    correct_answer: '1606',
    incorrect_answers: ['1605', '1723', '1628']
  }, {
    category: 'Entertainment: Musicals & Theatres',
    type: 'multiple',
    difficulty: 'medium',
    question: 'Who is the musical director for the award winning musical &quot;Hamilton&quot;?',
    correct_answer: 'Alex Lacamoire',
    incorrect_answers: ['Lin-Manuel Miranda', 'Renee Elise-Goldberry', 'Leslie Odom Jr.']
  }
]



describe('Instructions', () => {
  fetchQuestions.mockResolvedValue(questions)
  it('should render the default content', async () => {
    testStore.dispatch({
          type: 'SET_CATEGORY',
          category: 2116
        })
    const { getByTestId } = renderLogin()

    const welcomeMessage = getByTestId('message')
    const instructions = getByTestId('instructions')
    const startBtn = getByTestId('start-btn')

    expect(startBtn).toBeInTheDocument()
    expect(instructions).toBeInTheDocument()
    expect(welcomeMessage).toBeInTheDocument()


    const currentState = testStore.getState()

    setTimeout(() => expect(currentState.questions).toBe(questions), 100)
  });

  it('should render the default content', () => {
    const { getByTestId } = renderLogin()

    const startBtn = getByTestId('start-btn')

    fireEvent.click(startBtn)
    expect(window.location.pathname).toBe('/game/start')
  });


})
