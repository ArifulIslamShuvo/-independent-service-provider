import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    }

    
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="info" sticky="top" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='fs-3'style={{ color: 'gold' }}>Awesome  Photography</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className='fs-5 text-white' href="services">Services</Nav.Link>
                            <Nav.Link className='fs-5 text-white' href="blog">Blog</Nav.Link>
                            <Nav.Link className='fs-5 text-white'as={Link} to="about">About Me</Nav.Link>
                        </Nav>
                        <Nav>

                            {user?  <Nav.Link onClick={handleLogout} as={Link} to="login">Logout</Nav.Link>
                            : <Nav.Link as={Link} to="login" className='fs-4 text-white'>Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;