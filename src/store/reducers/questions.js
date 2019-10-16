import { GET_QUESTIONS } from '../actions/actionTypes'
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
    default:
      return state
  }
}

export default questions
