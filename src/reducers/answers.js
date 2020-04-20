


export const answers = (state = [], action) => {
  switch (action.type) {
    case 'ANSWER_QUESTION':
      return [ ...state, action.answer ]
    case 'CLEAR_ANSWERS':
      return []
    default:
      return state
  }
}
