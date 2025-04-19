// Author name: Sudhi Govind and Dinesh Narasimhalu Punniyamoorthy
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/styles.css";
import logo from "../images/logo.png";

function Navigation() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="navigation-bar shadow-sm py-3"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Pops and Ruby's Logo"
            width="50"
            height="50"
            className="me-2 rounded-circle border border-light"
          />
          <span className="brand">Pops and Ruby's</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3 nav-link">
            <Nav.Link as={Link} to="/" end="true" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" className="nav-item">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
