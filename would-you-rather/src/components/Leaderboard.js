import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardText, CardTitle, Button, Row, Col, Form, FormGroup, Input, Label} from 'reactstrap';
import {Link} from 'react-router-dom'
import {formatDate} from '../utils/helpers'
import {connect} from "react-redux";

function Leaderboard(props) {
    const {users} = props;
    console.log(Object.entries(users))
    const usersArrSorted = Object.entries(users).sort((x, y) => {
        const score1 = Object.entries(y[1].answers).length + y[1].questions.length;
        const score2 = Object.entries(x[1].answers).length + x[1].questions.length;
        return score1 - score2;
    })

    return (
        <>
            {usersArrSorted.map((user) => (
                <Col xs='6' className='mx-auto mt-5'>
                    <Card body>
                        <Row>
                            <Col xs='3' className='my-auto'>
                                <img
                                    src={`${user[1].avatarURL}`}
                                    height="90" width="90" className="rounded-circle mx-auto d-block"
                                    alt=""/>
                            </Col>
                            <Col xs='6'>
                                <CardTitle tag="h3">
                                    <strong>{user[1].name}</strong>
                                </CardTitle>
                                <CardText tag="h5">
                                    Answered Questions:{Object.entries(user[1].answers).length}
                                </CardText>
                                <CardText tag="h5">
                                    Created Questions:{user[1].questions.length}
                                </CardText>
                            </Col>
                            <Col xs='3'>
                                <CardText tag="h5">
                                    Total score:
                                </CardText>
                                <CardText tag="h5">
                                    {Object.entries(user[1].answers).length + user[1].questions.length}
                                </CardText>
                            </Col>
                        </Row>
                    </Card>
                </Col>

            ))}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps)(Leaderboard)