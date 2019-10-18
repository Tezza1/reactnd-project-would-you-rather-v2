import * as API from '../../utils/_DATA.js'
import { GET_QUESTIONS, ADD_QUESTION } from './actionTypes'

export const getQuestions = questions => {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export const handleGetQuestions = () => {
  return dispatch => {
    return API._getQuestions()
    .then( questions => {
        dispatch(getQuestions(questions))
      })
      .catch(() => {
        console.log('There was an error. Try again.')
      })
  }
}

export const addQuestion = question => {
  return {
    type: ADD_QUESTION,
    question
  }
}

export const handleAddQuestion = (question) => {
  return dispatch => {
    return API._saveQuestion(question)
      .then(question => {
        dispatch(addQuestion(question))
      })
      .catch(() => {
        console.log("There was an error. Try again")
      })
  }
}
