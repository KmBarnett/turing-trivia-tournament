export const scores = (state = [], action) => {
  switch (action.type) {
    case 'LOG_SCORE':
      return [ ...state, action.scoreData ]
    default:
      return state
  }
}
