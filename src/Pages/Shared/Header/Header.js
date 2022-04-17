import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="info" sticky="top" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='fs-3'>Awesome Photegraphy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="services">Services</Nav.Link>
                            <Nav.Link href="signup">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="login">Log In</Nav.Link>
                            <Nav.Link>About Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;