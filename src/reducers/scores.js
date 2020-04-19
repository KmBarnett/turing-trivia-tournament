export const scores = (state = [], action) => {
  switch (action.type) {
    case 'LOG_SCORE':
      return [ action.scoreData , ...state ]
    default:
      return state
  }
}
