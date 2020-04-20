export const logIn = user => ({
  type: 'LOG_IN',
  user
})

export const logOut = () => ({
  type: 'LOG_OUT',
})

export const getCategories = categories => ({
  type: 'GET_CATEGORIES',
  categories
})

export const setCategory = (category) => ({
  type: 'SET_CATEGORY',
  category
})

export const getQuestions = questions => ({
  type: 'GET_QUESTIONS',
  questions
})

export const answerQuestion = (answer) => ({
  type: 'ANSWER_QUESTION',
  answer
})

export const clearAnswers = () => ({
  type: 'CLEAR_ANSWERS',
})

export const logScore = (scoreData) => ({
  type: 'LOG_SCORE',
  scoreData
})

export const logTime = (time) => ({
  type: 'LOG_TIME',
  time
})
