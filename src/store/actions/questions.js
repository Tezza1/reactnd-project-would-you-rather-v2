import * as API from '../../utils/_DATA.js'
import { GET_QUESTIONS } from './actionTypes'

export const getQuestions = questions => {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export const handleGetQuestions = () => {
  return (dispatch) => {
    return API._getQuestions()
    .then( questions => {
        dispatch(getQuestions(questions))
      })
      .catch(() => {
        console.log('There was an error. Try again.')
      })
  }
}
