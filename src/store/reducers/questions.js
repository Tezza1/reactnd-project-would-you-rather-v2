import { GET_QUESTIONS, GET_QUESTION, ADD_QUESTION, CLEAR_NEWQ, SAVE_ANSWER } from '../actions/actionTypes'
import _ from 'lodash'

const initialState = {
  questions: [],
  question: {},
  newQ: ''
}

const questions = (state = initialState, action) => {
  switch(action.type){
    case GET_QUESTIONS:
      let qs = _.values(action.questions)
      return {
        ...state,
        questions: state.questions.concat(qs)
      }
    case GET_QUESTION:
      const { id } = action
      return {
        ...state,
        question: _.find(state.questions, { 'id': id })
      }
    case ADD_QUESTION:
      return {
        ...state,
        questions: state.questions.concat(action.question),
        newQ: action.question.id
      }
    case CLEAR_NEWQ:
      return {
        ...state,
        newQ: ''
      }
    case SAVE_ANSWER:
      const { answer } = action
      let { question } = state
      const choice = answer.answer

      let voteArr = question[choice].votes.concat(answer.authedUser)
      question[choice]['votes'] = voteArr

      return {
        ...state,
        questions: state.questions.filter(q => q.id !== question.id).concat(question)
      }
    default:
      return state
  }
}

export default questions
