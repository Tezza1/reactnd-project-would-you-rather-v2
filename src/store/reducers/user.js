import { GET_ALL_USERS, LOG_IN_USER, LOGGED_IN_USER, LOG_OUT_USER } from '../actions/actionTypes'

const initialState = {
  loggedInUser: '',
  loggedInState: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        ...action.users
      }

    case LOG_IN_USER:
      return {
        ...state
      }
    case LOGGED_IN_USER:
      return {
        ...state
      }
    case LOG_OUT_USER:
      return {
        ...state
      }
    default:
      return state
  }
}

export default user
