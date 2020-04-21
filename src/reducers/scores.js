export const scores = (state = [], action) => {
  switch (action.type) {
    case 'LOG_SCORE':
      console.log(state);
      return [ action.scoreData , ...state ]
    default:
      console.log(state);
      return state
  }
}
