import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardText, CardTitle, Button, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom'
import {formatDate} from '../utils/helpers'

function QuestionsList(props) {

    return (
        <>
            {
                props.questions.map((question, index) => (
                    <div key={index}>
                        <Card body>
                            <Row>
                                <Col xs='4' className='my-auto'>
                                    <img
                                        src={`${props.users[question[1][1].author].avatarURL}`}
                                        height="70" width="70" className="rounded-circle mx-auto d-block"
                                        alt=""/>
                                </Col>
                                <Col xs='8'>
                                    <CardTitle>
                                        <h4><strong>{props.users[question[1][1].author].name}</strong> asks:</h4>
                                        <h6>({formatDate(question[1][1].timestamp)})</h6>
                                    </CardTitle>
                                    <CardText>
                                        {question[1][1].optionOne.text}<strong> or </strong> {question[1][1].optionTwo.text}
                                    </CardText>
                                    <Link to={'/questions/' + question[1][1].id}><Button>Go to
                                        poll </Button></Link>
                                </Col>
                            </Row>

                        </Card>


                    </div>


                ))
            }

        </>
    );
}

export default QuestionsList
