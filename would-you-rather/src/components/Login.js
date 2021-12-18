import React, {useEffect, useState} from 'react';
import {Button, Row, Col, Input, Form} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux";
import authedUser from "../reducers/authedUser";
import {setAuthedUser} from "../actions/authedUser";
import {withRouter} from 'react-router-dom'

function Login(props) {


    const onSignIn = (e) => {
        e.preventDefault()
        const selectedUser = e.target.userSelect.value
        props.dispatch(setAuthedUser(selectedUser))
        props.history.push('/Home')
    }

    return (

        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <Form onSubmit={onSignIn}>
                <div className='text-center'>
                    <h2>Would You Rather?</h2>
                    <h6>by Alperen Savaşkan</h6>

                </div>
                <div className='mt-5 mb-5 text-center'><Input
                    id="userSelect"
                    name="userSelect"
                    type="select"
                >
                    {Object.entries(props.users).map((user, index) => (
                        <option key={user[1].id} value={user[1].id}>{user[1].name}</option>
                    ))}
                </Input>
                </div>
                <div className='text-center'>
                    <Button color="success" type="submit">Sign in</Button>
                </div>
            </Form>
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default withRouter(connect(mapStateToProps)(Login))
