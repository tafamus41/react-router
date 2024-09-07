import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
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
            <NavLink to="">Home</NavLink>
            <NavLink to="">Teacher</NavLink>
            <NavLink to="">Courses</NavLink>
            <NavLink to="">Contact</NavLink>
            <NavLink to="">Paths</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
