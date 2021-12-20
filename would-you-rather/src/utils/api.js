import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_DATA.js'

export function getUsers() {
    return Promise.all([
        _getUsers(),
    ]).then(([users]) => ({
        users,
    }))
}

export function getAllData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

export function saveQuestionAnswer(answerInfo) {
    return _saveQuestionAnswer(answerInfo)
}