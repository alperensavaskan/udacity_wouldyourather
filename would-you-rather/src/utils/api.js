import {
  _getUsers,
  _getQuestions,
 _saveQuestion,
_saveQuestionAnswer,
} from './_DATA.js'

export function getUserList () {
  return Promise.all([
    _getUsers(),
  ]).then(([users]) => ({
    users,
  }))
}

export function getQuestions () {
  return Promise.all([
    _getQuestions(),
  ]).then(([questions]) => ({
    questions,
  }))
}