export const category = (state = '2116', action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return action.category
    default:
      return state
  }
}
