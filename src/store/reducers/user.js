import { GET_ALL_USERS, LOG_IN_USER, LOG_OUT_USER } from '../actions/actionTypes'

const initialState = {
  users: '',
  userNames: [],
  loggedInUser: '',
  loggedInState: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      let userArr = []
      let { users } = action
      for (let usr in users){
        userArr.push({id: users[usr].id, name: users[usr].name})
      }
      return {
        ...state,
        users: action.users,
        userNames: state.userNames.concat(userArr)
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
