import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardText, CardTitle, Button, Col, Input,} from 'reactstrap';
import { Redirect} from 'react-router-dom'

import {connect} from "react-redux";
import {handleSaveQuestion} from "../actions/questions";
import {handleAllData} from "../actions/shared";

function NewQuestion(props) {
    const [optionOneText, setOptionOneText] = useState('');
    const [optionTwoText, setOptionTwoText] = useState('');
    const [toHome, setToHome] = useState(false);

    const writeToInput = (e) => {
        e.target.id === "optionOne" ? setOptionOneText(e.target.value) : setOptionTwoText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (optionOneText === '' || optionTwoText === '') {
            alert('Please fill all options!')
        } else {
            console.log(optionOneText);
            console.log(optionTwoText);
            props.dispatch(handleSaveQuestion(optionOneText, optionTwoText))
            props.dispatch(handleAllData())
            setToHome(true)
        }


    }

    if (toHome === true) {
        return <Redirect to='/'/>
    }

    return (
        <>
            {!props.authedUser && <Redirect to={{
                pathname: "/login",
                state: {from: props.location.pathname}
            }}/>}
            <Col xs='6' className='mx-auto mt-5'>
                <Card body
                >
                    <CardTitle tag="h5">
                        Create New Question
                    </CardTitle>
                    <CardText>
                        Would you rather...
                    </CardText>
                    <Input className="mb-2"
                           id="optionOne"
                           onChange={writeToInput}
                    />
                    OR
                    <Input className="mt-2 mb-3"
                           id="optionTwo"
                           onChange={writeToInput}
                    />
                    <Button color="success"
                            onClick={handleSubmit}>
                        Submit
                    </Button>
                </Card>
            </Col>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        authedUser: state.authedUser,
    }
}

export default connect(mapStateToProps)(NewQuestion)