import { questions } from './questions';
import { dataStore } from '../testingData.js'


describe('questions Reducer', () => {
  it('should return the initial state', () => {
    const expectedResult = [];
    const result = questions(undefined, {})
    expect(result).toEqual(expectedResult)
  });

  it('when receiving GET_QUESTIONS, should get questions', () => {
    const questionsData = dataStore.questions;
    const action = {
      type: 'GET_QUESTIONS',
      questions: questionsData
    }
    const expectedResult = dataStore.questions
    const result = questions([], action)
    expect(result).toEqual(expectedResult)

  });

})
