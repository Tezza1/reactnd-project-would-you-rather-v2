import * as API from '../../utils/_DATA.js'
import { GET_ALL_USERS, LOG_IN_USER, LOGGED_IN_USER, LOG_OUT_USER } from './actionTypes'

// get all the users
export const getUsers = users => {
  return {
    type: GET_ALL_USERS,
    users
  }
}

export function handleGetUsers (users, cb) {
return (dispatch) => {
    return API._getUsers()
      .then( users => {
        dispatch(getUsers(users))
        cb()
      })
      .catch(() => {
        console.log('There was an error. Try again.')
      })
  }
}

// then slect the user to login and set them to the user
export const logInUser = () => {
  return {
    type: LOG_IN_USER
  }
}

// get the currently logged in user -> if someone is logged in
// set logged in to true
export const loggedInUser = () => {
  return {
    type: LOGGED_IN_USER
  }
}

// set the current user to none
// set logged in to false
export const logOutUser = () => {
  return {
    type: LOG_OUT_USER
  }
}
