import {getAllData} from '../utils/api'
import {receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'
import {showLoading, hideLoading} from 'react-redux-loading-bar'


export function handleAllData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getAllData()
            .then(({users, questions}) => {
                dispatch(hideLoading())
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))

            })
    }
}
