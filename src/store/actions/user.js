import * as API from '../../utils/_DATA.js'
import { GET_ALL_USERS, LOG_IN_USER, LOG_OUT_USER } from './actionTypes'

export const getUsers = users => {
  return {
    type: GET_ALL_USERS,
    users
  }
}

export const handleGetUsers = users => {
return (dispatch) => {
    return API._getUsers()
      .then( users => {
        dispatch(getUsers(users))
      })
      .catch(() => {
        console.log('There was an error. Try again.')
      })
  }
}

export const logInUser = (user) => {
  return {
    type: LOG_IN_USER,
    user
  }
}

export const logOutUser = () => {
  return {
    type: LOG_OUT_USER
  }
}
