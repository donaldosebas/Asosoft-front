const Reducer = (state, action) => {
  switch (action.type) {
    case 'TYPE':
      return state
    case 'LOGIN':
      return {
        ...state,
        type: 'USER',
        token: action.token,
      }
    default:
      return state
  }
}
export default Reducer
