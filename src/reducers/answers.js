export const answers = (state = [], action) => {
  switch (action.type) {
    case 'ANSWER_QUESTION':
      return [ ...state, action.answer ]
    default:
      return state
  }
}
