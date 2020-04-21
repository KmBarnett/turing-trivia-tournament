import { user } from './user';
import { dataStore } from '../testingData.js'


describe('User Reducer', () => {
  it('should return the initial state', () => {
    const expectedResult = {};
    const result = user(undefined, {})
    expect(result).toEqual(expectedResult)
  });

  it('when receiving LOG_IN, should change to the correct user property', () => {
    const currentUser = dataStore.user;
    const action = {
      type: 'LOG_IN',
      user: currentUser
    }
    const expectedResult = dataStore.user
    const result = user({}, action)
    expect(result).toEqual(expectedResult)

  });

  it('when receiving LOG_OUT, should update the user property to its default value', () => {
    const initialState = dataStore.user;
    const action = {
      type: 'LOG_OUT'
    }
    const expectedResult = {}
    const result = user(initialState, action)
    expect(result).toEqual(expectedResult)
  });

})
