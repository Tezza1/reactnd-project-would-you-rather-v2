import { SET_PAGE } from '../actions/actionTypes.js'

const initialState = {
  page: ''
}

const navigation = (state = initialState, action) => {
  if(action.type === SET_PAGE) {
    const { page } = action
    return {
      page
    }
  }
  return state
}

export default navigation
