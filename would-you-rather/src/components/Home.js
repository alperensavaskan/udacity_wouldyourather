import React, {useEffect, useState} from 'react';
import {Button, Card, CardText, CardTitle, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionsList from './QuestionsList';
import {withRouter, NavLink as RRNavLink, Link} from "react-router-dom";
import {connect} from "react-redux";
import {handleAllData} from '../actions/shared'


function Home(props) {
    const [activeTab, setActiveTab] = useState('unanswered');
    const users = props.users
    const questions = Object.entries(props.questions)
    const answeredQuestions = questions.filter(question => question[1].optionOne.votes.includes(props.authedUser) || question[1].optionTwo.votes.includes(props.authedUser))
    const unansweredQuestions = questions.filter(question => !question[1].optionOne.votes.includes(props.authedUser) && !question[1].optionTwo.votes.includes(props.authedUser))
    const answeredQuestionsSorted = Object.entries(answeredQuestions).sort((x, y) => y[1][1].timestamp - x[1][1].timestamp);
    const unansweredQuestionsSorted = Object.entries(unansweredQuestions).sort((x, y) => y[1][1].timestamp - x[1][1].timestamp)

    useEffect(() => {
        props.dispatch(handleAllData())
    }, [])


    return (<>
            <div className="d-flex justify-content-center mt-5">
                <Nav pills>
                    <NavItem>
                        <NavLink className={activeTab === 'unanswered' ? 'active' : ''}
                                 onClick={() => setActiveTab('unanswered')}>
                            Unanswered Questions
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={activeTab === 'answered' ? 'active' : ''}
                                 onClick={() => setActiveTab('answered')}>
                            Answered Questions
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className="d-flex justify-content-center mt-5 mx-auto">
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="unanswered">
                        <QuestionsList questions={unansweredQuestionsSorted} users={users}/>
                    </TabPane>
                    <TabPane tabId="answered">
                        <QuestionsList questions={answeredQuestionsSorted} users={users}/>
                    </TabPane>
                </TabContent>
            </div>
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
