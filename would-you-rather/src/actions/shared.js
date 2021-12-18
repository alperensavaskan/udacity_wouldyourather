import {getUserList} from '../utils/api'
import {setAuthedUser} from '../actions/authedUser'
import {receiveUsers} from '../actions/users'
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

