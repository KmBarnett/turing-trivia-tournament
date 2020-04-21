import { categories } from './categories';
import { dataStore } from '../testingData.js'


describe('categories Reducer', () => {
  it('should return the initial state', () => {
    const expectedResult = [];
    const result = categories(undefined, {})
    expect(result).toEqual(expectedResult)
  });

  it('when receiving GET_CATEGORIES, should set categories', () => {
    const categoriesData = dataStore.categories
    const action = {
      type: 'GET_CATEGORIES',
      categories: categoriesData
    }
    const expectedResult = [{id: 2116, name:'All'}, ...dataStore.categories]
    const result = categories([], action)
    expect(result).toEqual(expectedResult)

  });

})
