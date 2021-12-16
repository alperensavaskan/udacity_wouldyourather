import React from 'react';
import { Button, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionsList from './QuestionsList';

function Home() {
    
    return (<>
        <div className="d-flex bd-highlight mb-3 align-items-center">
            <div className="me-auto p-2 bd-highlight">Would You Rather..?</div>
            <div className="p-2 bd-highlight"><img src="https://lh3.googleusercontent.com/ogw/ADea4I56EDh9odYEFIxxcaYckfrhYfte_0Q-Wsre1EC2WQ=s192-c-mo" height="40" width="40" className="rounded-circle" alt="Cinque Terre"/></div>
            <div className="p-2 bd-highlight">Ahmet Mehmet</div>
            <div className="p-2 bd-highlight"><Button color="danger">Sign out</Button></div>
        </div>

        <div className='mt-3'>
            <Nav
                tabs
            >
                <NavItem>
                    <NavLink
                        active
                        href="#"
                    >
                        HOME
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        New Question
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        disabled
                        href="#"
                    >
                        Leaderboard
                    </NavLink>
                </NavItem>

            </Nav>
        </div>
        <QuestionsList/>
        </>
    );
}

export default Home;
