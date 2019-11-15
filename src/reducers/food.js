// FOOD Reducer
const food = (state = { food: [], total: 0 }, action) => {
  switch (action.type) {
    case 'ADD_FOOD':
      return {
        food: [...state.food, action.food],
        total: state.total + action.food.kcal
      }
    default:
      return state
  }
}

export default food
