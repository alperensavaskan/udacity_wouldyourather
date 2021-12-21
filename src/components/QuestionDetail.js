import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card,
    CardText,
    CardTitle,
    Button,
    Row,
    Col,
    Input,
    Label,
    Form,
    FormGroup,
    Progress,
    CardBody,
    Badge,
} from 'reactstrap';
import { Redirect,} from 'react-router-dom'
import {connect} from "react-redux";
import {handleAllData} from "../actions/shared";

import {handleSaveQuestionAnswer} from "../actions/questions";

function QuestionDetail(props) {
    const id = props.match.params.question_id
    const authedUser = props.authedUser
    const users = props.users
    const question = props.questions[id]

    const [activeOption, setActiveOption] = useState('optionOne');

    if (!authedUser) {
        return (<Redirect to={{
            pathname: "/login",
            state: {from: props.location.pathname}
        }}/>)
    }

    if (!question) {
        return (<Redirect to='/404'/>)
    }

    const isAnswered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser);
    const optionOneCount = question.optionOne.votes.length
    const optionTwoCount = question.optionTwo.votes.length
    const totalVotes = optionOneCount + optionTwoCount
    const optionOnePercentage = ((optionOneCount / totalVotes) * 100).toFixed(2);
    const optionTwoPercentage = ((optionTwoCount / totalVotes) * 100).toFixed(2);
    const authedUserVote = question.optionOne.votes.includes(authedUser) ? "optionOne" : "optionTwo"

    const handleSubmit = (e) => {
        e.preventDefault()
        props.dispatch(handleSaveQuestionAnswer(id, activeOption))
        props.dispatch(handleAllData())

    }

    const handleOptionChange = (e) => {
        setActiveOption(e.target.value)
    }

    return (<>
            {isAnswered
                ? <Col xs='6' className='mx-auto mt-5'>
                    <Card body>
                        <Row>
                            <Col xs='4' className='my-auto'>
                                <img
                                    src={`${users[question.author].avatarURL}`}
                                    height="150" width="150" className="rounded-circle mx-auto d-block"
                                    alt=""/>
                            </Col>
                            <Col xs='8'>
                                <CardTitle tag="h5">
                                    Asked by <strong>{users[question.author].name}</strong>
                                </CardTitle>
                                <CardTitle tag="h3">
                                    Results:
                                </CardTitle>
                                <CardBody>
                                    <Card body
                                          className={authedUserVote === "optionOne" ? "text-right mt-2 bg-warning text-white" : "text-right mt-2"}>
                                        <CardTitle>Would you
                                            rather <strong>{question.optionOne.text}</strong>? {authedUserVote === "optionOne" &&
                                            <Badge color="secondary">
                                                Your vote
                                            </Badge>}</CardTitle>

                                        <CardBody><Progress value={optionOnePercentage}>
                                            {optionOnePercentage}%
                                        </Progress></CardBody>
                                        <CardText>{optionOneCount} out of {totalVotes} votes.</CardText>
                                    </Card>
                                    <Card body
                                          className={authedUserVote === "optionTwo" ? "text-right mt-2 bg-warning text-white" : "text-right mt-2"}>
                                        <CardTitle>Would you
                                            rather <strong>{question.optionTwo.text}</strong>? {authedUserVote === "optionTwo" &&
                                            <Badge color="secondary">
                                                Your vote
                                            </Badge>}</CardTitle>
                                        <CardBody><Progress value={optionTwoPercentage}>
                                            {optionTwoPercentage}%
                                        </Progress></CardBody>
                                        <CardText>{optionTwoCount} out of {totalVotes} votes.</CardText>
                                    </Card>

                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                : <Col xs='6' className='mx-auto mt-5'>
                    <Card body>
                        <Row>
                            <Col xs='4' className='my-auto'>
                                <img
                                    src={`${users[question.author].avatarURL}`}
                                    height="90" width="90" className="rounded-circle mx-auto d-block"
                                    alt=""/>
                            </Col>
                            <Col xs='8'>
                                <CardTitle tag="h6">
                                    <strong>{users[question.author].name}</strong> asks:
                                </CardTitle>
                                <CardTitle tag="h4">
                                    Would you rather ..?
                                </CardTitle>
                                <CardBody>

                                    <Form onSubmit={handleSubmit}>
                                        <FormGroup check>
                                            <Input
                                                name="options"
                                                type="radio"
                                                value="optionOne"
                                                onChange={handleOptionChange}
                                            />
                                            <Label check>
                                                {question.optionOne.text}
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Input
                                                name="options"
                                                type="radio"
                                                value="optionTwo"
                                                onChange={handleOptionChange}
                                            />
                                            <Label check>
                                                {question.optionTwo.text}
                                            </Label>
                                        </FormGroup>
                                        <Button color="primary" type="submit">Submit</Button>
                                    </Form>
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            }
        </>

    )

}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        authedUser: state.authedUser,
        questions: state.questions,
    }
}

export default connect(mapStateToProps)(QuestionDetail)
