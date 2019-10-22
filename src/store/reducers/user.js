import { GET_ALL_USERS, LOG_IN_USER, LOG_OUT_USER, UPDATE_USER_ANSWER, UPDATE_USER_QUESTION } from '../actions/actionTypes'
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
    case UPDATE_USER_ANSWER:
      console.log(action.uid)
      console.log(action.ans)
      let allUserAns = state.users
      let theUserAns = _.find(allUserAns, {id: action.uid})
      theUserAns.answers = _.merge({}, theUserAns.answers, action.ans)  // could also use _.assign
      return {
        ...state,
        users: state.users.filter(usr => usr.id !== action.uid).concat(theUserAns)
      }
    case UPDATE_USER_QUESTION:
      let allUser = state.users
      let theUser = _.find(allUser, {id: action.uid})
      theUser.questions = _.concat(theUser.questions, action.qs)
      return {
        ...state,
        users: state.users.filter(usr => usr.id !== action.uid).concat(theUser)
      }
    default:
      return state
  }
}

export default user
