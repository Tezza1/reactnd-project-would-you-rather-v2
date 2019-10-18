import { GET_ALL_USERS, LOG_IN_USER, LOG_OUT_USER } from '../actions/actionTypes'
import _ from 'lodash'

const initialState = {
  users: [],
  loggedInUser: '',
  loggedInState: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      let { users } = action
      let userArr = _.values(users)
      return {
        ...state,
        users: state.users.concat(userArr),
      }
    case LOG_IN_USER:
      return {
        ...state,
        loggedInUser: action.user,
        loggedInState: true
      }
    case LOG_OUT_USER:
      return {
        ...state,
        loggedInUser: '',
        loggedInState: false
      }
    default:
      return state
  }
}

export default user
