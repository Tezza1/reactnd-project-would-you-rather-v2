import { LOG_IN_USER, LOGGED_IN_USER, LOG_OUT_USER } from './actionsTypes'

// get all the users and then slect the user to login
// set them to the user
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
