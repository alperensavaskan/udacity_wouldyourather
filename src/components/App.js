import React, {useEffect, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import Login from './Login';
import Home from './Home';
import Leaderboard from "./Leaderboard";
import QuestionDetail from './QuestionDetail';
import NewQuestion from "./NewQuestion";
import Page404 from "./Page404";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {handleAllData} from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import Header from "./Header";


function App(props) {

    useEffect(() => {

        props.dispatch(handleAllData())
    }, [])

    return (
        <Router>
            <Fragment>
                <LoadingBar/>
                <Header/>
                {props.loading === true
                    ? null
                    :
                    <div>
                        <Route path='/' exact component={Home}/>
                        <Route path='/Home' component={Home}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/questions/:question_id' component={QuestionDetail}/>
                        <Route path='/leaderboard' component={Leaderboard}/>
                        <Route path='/add' component={NewQuestion}/>
                        <Route path='/404' component={Page404}/>
                    </div>
                }
            </Fragment>
        </Router>

    );
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        authedUser: state.authedUser,
        loading: state.users === null
    }
}


export default connect(mapStateToProps)(App)
