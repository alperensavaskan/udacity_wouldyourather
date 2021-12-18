import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink, TabPane, TabContent, Card, CardText, CardTitle, Button } from 'reactstrap';

function QuestionsList() {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <div>
            <div className="d-flex justify-content-center mt-5" >
                <Nav pills>
                    <NavItem>
                        <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                            Unanswered Questions
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                            Answered Questions
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className="d-flex justify-content-center mt-5" >
                <TabContent activeTab={activeTab}>



                    <TabPane tabId="1">
                        <div>
                            <Card body>
                                <CardTitle tag="h5">
                                    Special Title Treatment
                                </CardTitle>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.
                                </CardText>
                                <Button>
                                    Go somewhere
                                </Button>
                            </Card>
                            <Card
                                body
                                className="text-center"
                            >
                                <CardTitle tag="h5">
                                    Special Title Treatment
                                </CardTitle>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.
                                </CardText>
                                <Button>
                                    Go somewhere
                                </Button>
                            </Card>
                            <Card
                                body
                                className="text-right"
                            >
                                <CardTitle tag="h5">
                                    Special Title Treatment
                                </CardTitle>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.
                                </CardText>
                                <Button>
                                    Go somewhere
                                </Button>
                            </Card>
                        </div>
                    </TabPane>





                    <TabPane tabId="2">Tab 2 Content
                    </TabPane>


                </TabContent>
            </div>
        </div>

    );
}

export default QuestionsList;
