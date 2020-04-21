import React from 'react';
import {render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Winner from './Winner';

import {fetchQuestions} from '../../apiCalls.js'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../../reducers';

jest.mock('../../apiCalls');

const testStore = createStore(rootReducer);

function renderWinner() {
  return render(<Provider store={testStore}>
    <BrowserRouter>
      <Winner />
    </BrowserRouter>
  </Provider>)
}

describe('Winner', () => {
  it('should render the default content', async () => {
    const { getByTestId } = renderWinner()
    const place = getByTestId('place')
    const stats = getByTestId('stats')
    const continueBtn = getByTestId('continue')

    expect(place).toBeInTheDocument()
    expect(stats).toBeInTheDocument()
    expect(continueBtn).toBeInTheDocument()

  });

  it('should navigate', () => {
    const { getByTestId } = renderWinner()

    const continueBtn = getByTestId('continue')

    fireEvent.click(continueBtn)
    expect(window.location.pathname).toBe('/game/end/leaderboard')
  });

})

/* cannot test Confetti conditional rendering because it breaks test */
