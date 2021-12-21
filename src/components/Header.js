import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, NavItem, NavLink} from 'reactstrap';
import {NavLink as RouterNavLink} from 'react-router-dom'
import {outAuthedUser} from "../actions/authedUser";
import {connect} from "react-redux";

function Header(props) {

    const signOut = () => {
        props.dispatch(outAuthedUser())
    }
    return (
        <>
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
                    (null)}

            </div>
            <div className='mt-3'>
                <Nav
                    tabs
                >
                    <NavItem>
                        <NavLink tag={RouterNavLink} exact to="/Home" activeClassName="active">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} exact to="/add" activeClassName="active">New Question</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} exact to="/leaderboard" activeClassName="active">Leader
                            Board</NavLink>
                    </NavItem>

                </Nav>
            </div>


        </>
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        authedUser: state.authedUser,
    }
}


export default connect(mapStateToProps)(Header)
