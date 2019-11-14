// PROFILE Reducer
const profile = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PROFILE':
      return {
        ...state,
        userProfile: action.profile
      }
    default:
      return state
  }
}

export default profile
