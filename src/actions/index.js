export const logIn = user => ({
  type: 'LOG_IN',
  user
})

export const getQuestions = questions => ({
  type: 'GET_QUESTIONS',
  questions
})

export const answerQuestion = (answer) => ({
  type: 'ANSWER_QUESTION',
  answer
})

export const logScore = (scoreData) => ({
  type: 'LOG_SCORE',
  scoreData
})

export const logTime = (time) => ({
  type: 'LOG_TIME',
  time
})
