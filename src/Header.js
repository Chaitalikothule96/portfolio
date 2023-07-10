import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark" data-bs-theme="dark" className="fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/home"><h2>Portfolio</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" onClick={scrollToTop}><h5>Home</h5></Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={scrollToTop}><h5>About</h5></Nav.Link>
            <Nav.Link as={Link} to="/skills" onClick={scrollToTop}><h5>Skills</h5></Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={scrollToTop}><h5>Projects</h5></Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={scrollToTop}><h5>Contact</h5></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
