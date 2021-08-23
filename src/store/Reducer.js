const Reducer = (state, action) => {
  switch (action.type) {
    case 'TYPE':
      return state
    case 'TOKEN':
      return {
        ...state,
        token: action.token,
      }
    case 'LOGIN':
      return {
        ...state,
        type: 'USER',
        token: action.token,
      }
    case 'LOGOUT':
      return {
        ...state,
        token: undefined,
      }
    default:
      return state
  }
}
export default Reducer
