import food from './food'
import profile from './profile'
import { combineReducers } from 'redux'

// Reducer
const rootReducer = combineReducers({ food, profile })

export default rootReducer
