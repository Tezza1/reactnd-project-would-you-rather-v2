import * as API from '../../utils/_DATA.js'
import { GET_QUESTIONS, GET_QUESTION, ADD_QUESTION, CLEAR_NEWQ, SAVE_ANSWER } from './actionTypes'

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

export const getQuestion = id => {
  return {
    type: GET_QUESTION,
    id
  }
}

export const addQuestion = question => {
  return {
    type: ADD_QUESTION,
    question
  }
}

export const handleAddQuestion = question => {
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

export const clearNewQ = () => {
  return {
    type: CLEAR_NEWQ
  }
}

export const saveAnswer = answer => {
  return {
    type: SAVE_ANSWER,
    answer
  }
}

export const handleSaveAnswer = answer => {
  return dispatch => {
    return API._saveQuestionAnswer(answer)
      .then(() => {
        dispatch(saveAnswer(answer))
      })
      .catch(() => {
        console.log("There was an error")
      })
  }
}
