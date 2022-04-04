import React from 'react'
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const AnalyticsNav = () => {
    return (
        <div className='border-bottom sticky-top top-0 bg-white'>
            <Container fluid className='app-container'>
                <Nav className="app-nav flex-nowrap overflow-x-auto overflow-y-hidden" as="nav" variant="pills" defaultActiveKey="/">
                    <Nav.Item>
                        <NavLink to="/"
                            className={`text-decoration-none p-3 text-nowrap`}>
                            Efficiency
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/analytics/volume"
                            className={`text-decoration-none p-3 text-nowrap`}>
                            Volume
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/analytics/customer-satisfaction"
                            className={`text-decoration-none p-3 text-nowrap`}>
                            Customer Satisfaction
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/analytics/backlog"
                            className={`text-decoration-none p-3 text-nowrap`}>
                            Backlog
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    )
}

export default AnalyticsNav