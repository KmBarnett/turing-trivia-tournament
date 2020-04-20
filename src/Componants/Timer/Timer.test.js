import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameTimer from './Timer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

const testStore = createStore(rootReducer);

describe('Header', () => {
  it('should render', () => {
    const { getByText, getByTestId } = render(
      <Provider store={testStore}>
        <BrowserRouter>
          <GameTimer />
        </BrowserRouter>
      </Provider>
    )

    const timer = getByTestId('timer')
    const time = getByText('60')

    expect(timer).toBeInTheDocument()
    expect(time).toBeInTheDocument()
  });

/* Due to the use of the npm react Component i am unable to test the fucntionality of this Component to its fullest i have to trust that the package was Quickly tested and that my functions will be called when they need to be. */


})
