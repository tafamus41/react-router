import React from "react";
import { Container, Nav, Navbar,NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../img/logo.png";
const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Link>
          <img to="/" src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" to="/teacher">Home</Nav.Link>
            <Nav.Link className="nav-link" to="/teacher">Teacher</Nav.Link>
            <Nav.Link className="nav-link" to="/courses">Courses</Nav.Link>
            <Nav.Link className="nav-link" to="/contact">Contact</Nav.Link>
            <Nav.Link className="nav-link" to="/paths">Paths</Nav.Link>
            <Nav.Link href="https://github.com/clarusway"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
