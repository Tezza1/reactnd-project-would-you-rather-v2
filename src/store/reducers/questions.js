import { GET_QUESTIONS } from '../actions/actionTypes'

const initialState = {}

const questions = (state = initialState, action) => {
  switch(action.type){
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.questions
      }
    default:
      return state
  }
}

export default questions
