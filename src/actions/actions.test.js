import * as actions from '.';


describe('Action Creators', () => {
  it('should have a type of LOG_IN and a correct payload', () => {
    const user = {name:'Alan', cohort:'1911FE'}
    const expectedAction = {
      type: 'LOG_IN',
      user
    }
    const result = actions.logIn(user)
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of GET_CATEGORIES and a correct payload', () => {
    const categories = [{id:1, name:'test'}]
    const expectedAction = {
      type: 'GET_CATEGORIES',
      categories
    }
    const result = actions.getCategories(categories)
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of SET_CATEGORY and a correct payload', () => {
    const category = 1
    const expectedAction = {
      type: 'SET_CATEGORY',
      category
    }
    const result = actions.setCategory(category)
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of GET_QUESTIONS and a correct payload', () => {
    const questions = [{question: 'test'}]
    const expectedAction = {
      type: 'GET_QUESTIONS',
      questions
    }
    const result = actions.getQuestions(questions)
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of ANSWER_QUESTION and a correct payload', () => {
    const answer = {answer: 'test'}
    const expectedAction = {
      type: 'ANSWER_QUESTION',
      answer
    }
    const result = actions.answerQuestion(answer)
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of LOG_SCORE and a correct payload', () => {
    const scoreData = {scoreData: 'test'}
    const expectedAction = {
      type: 'LOG_SCORE',
      scoreData
    }
    const result = actions.logScore(scoreData)
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of LOG_TIME and a correct payload', () => {
    const time = 6
    const expectedAction = {
      type: 'LOG_TIME',
      time
    }
    const result = actions.logTime(time)
    expect(result).toEqual(expectedAction)
  });



})
