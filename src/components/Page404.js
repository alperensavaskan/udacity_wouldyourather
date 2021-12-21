import React from 'react'
import {Card, CardText, CardTitle, Col} from "reactstrap";

export default function Page404() {
    return (
        <>
            <Col xs='6' className='mx-auto mt-5'>
                <Card body
                >
                    <CardTitle tag="h2">
                        404
                    </CardTitle>
                    <CardText>
                        Question Not Found
                    </CardText>
                </Card>
            </Col>
        </>
    )
}