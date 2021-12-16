import React from 'react';
import { Button, Row, Col, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
    return (

        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <div>
            <div className='text-center'>
                <p><h2>Would You Rather?</h2></p>
                <p><h7>by Alperen Savaşkan</h7></p>
            </div>
                <div className='mt-5 mb-5 text-center'><Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                >
                    <option>
                        Ahmet Mehmet
                    </option>
                    <option>
                        2
                    </option>
                    <option>
                        3
                    </option>
                    <option>
                        4
                    </option>
                    <option>
                        5
                    </option>
                </Input>
                </div>
                <div className='text-center'>
                    <Button color="success">Sign in</Button>
                </div>
            </div>
        </div>

    );
}

export default Login;
