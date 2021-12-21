import {showLoading, hideLoading} from 'react-redux-loading-bar'
import {saveQuestionAnswer,saveQuestion} from '../utils/api'
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
export function handleSaveQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())

    return saveQuestion({
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
      author: authedUser
    }).then(() => dispatch(hideLoading()))
  }
}
