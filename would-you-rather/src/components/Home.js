import React, {useEffect} from 'react';
import { Button, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionsList from './QuestionsList';
import {withRouter, NavLink as RRNavLink} from "react-router-dom";
import {connect} from "react-redux";

import {outAuthedUser} from "../actions/authedUser";

function Home(props) {

      useEffect(() => {
          //console.log(props.authedUser)

    }, [])


    return (<>
        <QuestionsList/>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        authedUser: state.authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Home))
