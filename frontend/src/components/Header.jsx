import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>MERN Auth</Navbar.Brand>
          <Navbar.Toggle arial-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/login'>
                <FaSignInAlt /> Sign in
              </Nav.Link>
              <Nav.Link href='/register'>
                <FaSignOutAlt /> Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
