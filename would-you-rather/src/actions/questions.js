import {showLoading, hideLoading} from 'react-redux-loading-bar'
import {saveQuestionAnswer} from '../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function handleSaveQuestionAnswer (qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return saveQuestionAnswer({authedUser, qid, answer})
      .then(() => dispatch(hideLoading()))
  }
}