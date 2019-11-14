// FOOD Reducer
const food = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_FOOD':
      return {
        ...state,
        food: action.food
      }
    default:
      return state
  }
}

export default food
