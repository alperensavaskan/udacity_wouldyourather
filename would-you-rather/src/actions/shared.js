import {getUserList, getQuestions} from '../utils/api'
import {receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'
import {showLoading, hideLoading} from 'react-redux-loading-bar'

export function handleInitialUserListData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getUserList()
            .then(({users}) => {
                dispatch(hideLoading())
                dispatch(receiveUsers(users))
            })
    }
}

export function handleInitialDataAfterLogin() {
    return (dispatch) => {
        dispatch(showLoading())
        return getQuestions()
            .then(({questions}) => {
                dispatch(hideLoading())
                dispatch(receiveQuestions(questions))
            })
    }
}
