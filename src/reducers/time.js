export const time = (state = 0, action) => {
  switch (action.type) {
    case 'LOG_TIME':
      return action.time
    default:
      return state
  }
}
