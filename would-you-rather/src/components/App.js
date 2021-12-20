import React, {useEffect, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import Login from './Login';
import Home from './Home';
import Leaderboard from "./Leaderboard";
import QuestionDetail from './QuestionDetail';
import {BrowserRouter as Router, NavLink as RouterNavLink, Route, Redirect} from 'react-router-dom'
import {handleInitialUserListData} from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import {Button, Nav, NavItem, NavLink} from "reactstrap";
import {outAuthedUser} from "../actions/authedUser";


function App(props) {


    useEffect(() => {
        props.dispatch(handleInitialUserListData())
    }, [])

    const signOut = () => {
        props.dispatch(outAuthedUser())
    }
   
    return (
        <Router>
            <Fragment>
                <LoadingBar/>
                <div className="d-flex bd-highlight mb-3 align-items-center">
                    <div className="me-auto p-2 bd-highlight">Would You Rather..?</div>
                    {props.authedUser ? (
                            <>
                                <div className="p-2 bd-highlight"><img
                                    src={`${props.users[props.authedUser].avatarURL}`}
                                    height="40" width="40" className="rounded-circle" alt=""/></div>
                                <div className="p-2 bd-highlight">{props.users[props.authedUser].name}</div>
                                <div className="p-2 bd-highlight"><Button color="danger" onClick={signOut}>Sign out</Button>
                                </div>
                            </>
                        ) :
                        (<Redirect to='/Login'/>)}

                </div>
                <div className='mt-3'>
                    <Nav
                        tabs
                    >
                        <NavItem>
                            <NavLink tag={RouterNavLink} exact to="/Home" activeClassName="active">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouterNavLink} exact to="/newQuestion" activeClassName="active">New Question</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouterNavLink} exact to="/leaderboard" activeClassName="active">Leader Board</NavLink>
                        </NavItem>

                    </Nav>
                </div>
                {props.loading === true
                    ? null
                    :
                    <div>
                        <Route path='/' exact component={Home}/>
                        <Route path='/Home' component={Home}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/questions/:question_id' component={QuestionDetail}/>
                        <Route path='/Leaderboard' component={Leaderboard}/>
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
