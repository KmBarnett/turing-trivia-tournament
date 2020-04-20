import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import selectEvent from 'react-select-event'
import '@testing-library/jest-dom';
import Login from './Login';

import { fetchCategories } from '../../apiCalls';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

jest.mock('../../apiCalls');

const testStore = createStore(rootReducer);
function renderLogin() {
  return render(
    <Provider store={testStore}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  )
}

describe('Header', () => {
  fetchCategories.mockResolvedValue([{id:1, name:'All'}, {id:2, name:'test'}])
  it('should render the default content', () => {
    const { getByPlaceholderText, getByTestId } = renderLogin()

    const nameInput = getByPlaceholderText('Your Name')
    const cohortSelect = getByTestId('select-cohort')
    const programSelect = getByTestId('select-program')
    const categorySelect = getByTestId('select-category')

    expect(nameInput).toBeInTheDocument()
    expect(cohortSelect).toBeInTheDocument()
    expect(programSelect).toBeInTheDocument()
    expect(categorySelect).toBeInTheDocument()
  });

  it('should render the default content', () => {
    const { getByPlaceholderText, getByTestId, debug } = renderLogin()

    const nameInput = getByPlaceholderText('Your Name')
    const cohortSelect = getByTestId('select-cohort')
    const programSelect = getByTestId('select-program')
    const categorySelect = getByTestId('select-category')

    fireEvent.change(nameInput, {target: {value: 'Alan Turing'}});
    selectEvent.select(cohortSelect, {target: {value: '1911'}});
    selectEvent.select(programSelect, {target: {value: 'FE'}});
    selectEvent.select(categorySelect, {target: {value: '1'}});
    debug()
  });

})
