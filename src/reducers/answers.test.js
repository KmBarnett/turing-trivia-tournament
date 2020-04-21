import { answers } from './answers';


describe('answers Reducer', () => {
  it('should return the initial state', () => {
    const expectedResult = [];
    const result = answers(undefined, {})
    expect(result).toEqual(expectedResult)
  });

  it('when receiving ANSWER_QUESTION, should submit an answer', () => {
    const testAnswer = {test: 'test'}
    const action = {
      type: 'ANSWER_QUESTION',
      answer: testAnswer
    }
    const expectedResult = [testAnswer]
    const result = answers([], action)
    expect(result).toEqual(expectedResult)

  });

  it('when receiving CLEAR_ANSWERS, should clear answers', () => {
    const action = {
      type: 'CLEAR_ANSWERS',
    }
    const expectedResult = []
    const result = answers([], action)
    expect(result).toEqual(expectedResult)

  });

})
