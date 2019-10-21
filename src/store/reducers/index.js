import { combineReducers } from 'redux'
import user from './user'
import questions from './questions'
import navigation from './navigation'

const rootReducer = combineReducers({
  user,
  questions,
  navigation
})

export default rootReducer
