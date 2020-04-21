import { time } from './time';


describe('time Reducer', () => {
  it('should return the initial state', () => {
    const expectedResult = 0;
    const result = time(undefined, {})
    expect(result).toEqual(expectedResult)
  });

  it('when receiving LOG_TIME, should change to the correct time', () => {
    const currentTime = 1;
    const action = {
      type: 'LOG_TIME',
      time: currentTime
    }
    const expectedResult = 1
    const result = time(0, action)
    expect(result).toEqual(expectedResult)

  });

})
