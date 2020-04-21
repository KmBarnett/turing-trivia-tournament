import { scores } from './scores';
import { dataStore } from '../testingData.js'


describe('scores Reducer', () => {
  it('should return the initial state', () => {
    const expectedResult = [];
    const result = scores(undefined, {})
    expect(result).toEqual(expectedResult)
  });

  it('when receiving LOG_SCORE, should change to the correct scores', () => {
    const currentScore = dataStore.scoresData[0];
    const action = {
      type: 'LOG_SCORE',
      scoreData: currentScore
    }
    const expectedResult = [dataStore.scoresData[0]]
    const result = scores([], action)
    expect(result).toEqual(expectedResult)

  });

})
