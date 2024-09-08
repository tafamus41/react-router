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
            <NavLink className="nav-link" to="/teacher">Home</NavLink>
            <NavLink className="nav-link" to="/teacher">Teacher</NavLink>
            <NavLink className="nav-link" to="/courses">Courses</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
            <NavLink className="nav-link" to="/paths">Paths</NavLink>
            <NavLink href="https://github.com/clarusway"></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
