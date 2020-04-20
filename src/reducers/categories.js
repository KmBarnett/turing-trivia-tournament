export const categories = (state = [], action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return [{id: 2116, name:'All'}, ...action.categories]
    default:
      return state
  }
}
