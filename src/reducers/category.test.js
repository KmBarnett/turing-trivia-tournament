import { category } from './category';


describe('category Reducer', () => {
  it('should return the initial state', () => {
    const expectedResult = '2116';
    const result = category(undefined, {})
    expect(result).toEqual(expectedResult)
  });

  it('when receiving SET_CATEGORY, should set category', () => {
    const action = {
      type: 'SET_CATEGORY',
      category: '1'
    }
    const expectedResult = '1'
    const result = category('2116', action)
    expect(result).toEqual(expectedResult)

  });

})
