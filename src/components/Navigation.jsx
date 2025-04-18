import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/styles.css";
import logo from "../images/logo.png";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navigation-bar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Pops and Ruby's Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          Pops and Ruby's
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
