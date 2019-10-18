import { GET_QUESTIONS, ADD_QUESTION } from '../actions/actionTypes'
import _ from 'lodash'

const initialState = {
  questions: []
}

const questions = (state = initialState, action) => {
  switch(action.type){
    case GET_QUESTIONS:
      let qs = _.values(action.questions)
      return {
        ...state,
        questions: state.questions.concat(qs)
      }
    case ADD_QUESTION:
      return {
        ...state,
        questions: state.questions.concat(action.question)
      }
    default:
      return state
  }
}

export default questions
