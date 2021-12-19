import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink, TabPane, TabContent, Card, CardText, CardTitle, Button, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import { formatDate } from '../utils/helpers';
import { Link } from 'react-router-dom'

function QuestionsList(props) {
    const [activeTab, setActiveTab] = useState('unanswered');
    const users = props.users
    const questions = Object.entries(props.questions)
    const answeredQuestions = questions.filter(question => question[1].optionOne.votes.includes(props.authedUser) || question[1].optionTwo.votes.includes(props.authedUser))
    const unansweredQuestions = questions.filter(question => !question[1].optionOne.votes.includes(props.authedUser) && !question[1].optionTwo.votes.includes(props.authedUser))
    const answeredQuestionsSorted = Object.entries(answeredQuestions).sort((x, y) => y[1].timestamp - x[1].timestamp).reverse();
    const unansweredQuestionsSorted = Object.entries(unansweredQuestions).sort((x, y) => y[1].timestamp - x[1].timestamp).reverse();
    useEffect(() => {

        console.log(users["johndoe"].name)


    }, [])

    return (
        <div>
            <div className="d-flex justify-content-center mt-5" >
                <Nav pills>
                    <NavItem>
                        <NavLink className={activeTab === 'unanswered' ? 'active' : ''} onClick={() => setActiveTab('unanswered')}>
                            Unanswered Questions
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={activeTab === 'answered' ? 'active' : ''} onClick={() => setActiveTab('answered')}>
                            Answered Questions
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className="d-flex justify-content-center mt-5 mx-auto" >
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="unanswered">

                        {unansweredQuestionsSorted.map((question, index) => (
                            <div>
                                <Card body >
                                    <Row>
                                        <Col xs='4' className='my-auto'>
                                            <img
                                                src={`${users[question[1][1].author].avatarURL}`}
                                                height="70" width="70" className="rounded-circle mx-auto d-block" alt="" />
                                        </Col>
                                        <Col xs='8'>
                                            <CardTitle tag="h5">
                                                <strong>{users[question[1][1].author].name}</strong> asks:
                                            </CardTitle>
                                            <CardText>
                                                {question[1][1].optionOne.text}<strong> or </strong>  {question[1][1].optionTwo.text}
                                            </CardText>
                                            <Link to={'/questions/' + question[1][1].id}><Button>Go to poll </Button></Link>
                                        </Col>
                                    </Row>

                                </Card>



                            </div>



                        ))}




                    </TabPane>





                    <TabPane tabId="answered">

                        {answeredQuestionsSorted.map((question, index) => (
                            <div>
                                <Card body >
                                    <Row>
                                        <Col xs='4' className='my-auto'>
                                            <img
                                                src={`${users[question[1][1].author].avatarURL}`}
                                                height="70" width="70" className="rounded-circle mx-auto d-block" alt="" />
                                        </Col>
                                        <Col xs='8'>
                                            <CardTitle tag="h5">
                                                <strong>{users[question[1][1].author].name}</strong> asks:
                                            </CardTitle>
                                            <CardText>
                                                {question[1][1].optionOne.text}<strong> or </strong>  {question[1][1].optionTwo.text}
                                            </CardText>

                                            <Link to={'/questions/' + question[1][1].id}><Button>Go to poll </Button></Link>

                                        </Col>
                                    </Row>

                                </Card>



                            </div>



                        ))}
                    </TabPane>


                </TabContent>
            </div>
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        authedUser: state.authedUser,
        questions: state.questions
    }
}

export default connect(mapStateToProps)(QuestionsList)
