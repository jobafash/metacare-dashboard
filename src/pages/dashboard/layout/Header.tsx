import { NavLink } from 'react-router-dom';
import Nav  from 'react-bootstrap/Nav';
import Form  from 'react-bootstrap/Form';
import Badge  from 'react-bootstrap/Badge';
import Image  from 'react-bootstrap/Image';
import Navbar  from 'react-bootstrap/Navbar';
import Container  from 'react-bootstrap/Container';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import { ReactComponent as NotificationIcon } from "../../../assets/images/icons/bell.svg";
import UserAvatar from "../../../assets/images/avatar/user.png";

const Header = ({
    ...props
}) => {
    return (
        <Navbar  bg="white" className='border-bottom'>
            <Container fluid className='d-flex justify-content-between align-items-center app-container flex-md-nowrap flex-wrap gap-3'>
                <Navbar.Toggle aria-controls="offCanvasNavbar"  className="d-block d-lg-none me-3 order-1"/>
                <Form className="order-md-2 order-3 navbar-search-form">
                    <Form.Control
                        type="search"
                        placeholder="Ask us any question"
                        className="search-input-right flex-grow-1"
                        aria-label="Search"
                    />
                </Form>
                <Nav  className="ms-auto border right-nav align-items-center order-md-3 order-2">
                    <Nav.Link as={NavLink} to="/#notification">
                        <span className=''>
                            <NotificationIcon/>
                            <Badge bg="danger" className='p-1 small fw-light ms-1'>3</Badge>
                        </span>
                    </Nav.Link>
                    <div className="vr mx-3"/>
                    <NavDropdown align="end" title={
                        <span className='d-flex justify-content-start align-items-center'>
                            <span className='avatar avatar-sm border border-primary bg-light rounded-circle me-1'>
                                <Image src={UserAvatar} fluid/>
                            </span>
                            <i className='bi-chevron-down align-text-bottom pt-1 small'></i>
                        </span>
                    } className="p-0">
                        <NavDropdown.Item as={NavLink} to="/profile"> 
                            <i className='bi-person text-muted'></i>
                            <div className="vr mx-2"/>Profile
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;