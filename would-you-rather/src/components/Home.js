import React, {useEffect} from 'react';
import { Button, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionsList from './QuestionsList';
import {withRouter, NavLink as RRNavLink} from "react-router-dom";
import {connect} from "react-redux";
import {handleInitialDataAfterLogin} from '../actions/shared'


function Home(props) {

      useEffect(() => {
        props.dispatch(handleInitialDataAfterLogin())
      

    }, [])


    return (<>
        <QuestionsList/>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        authedUser: state.authedUser,
        questions: state.questions
    }
}

export default withRouter(connect(mapStateToProps)(Home))
