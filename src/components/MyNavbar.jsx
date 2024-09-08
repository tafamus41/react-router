import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

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
            <NavLink
              style={(isActive) => ({
                color: isActive && "red",
              })}
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
            <NavLink style={(isActive) => ({
                fonSize: isActive && "50px",
              })} className="nav-link" to="/teacher">
              Teacher
            </NavLink>
            <NavLink style={(isActive) => ({
                border: isActive && "1px solid blue",
              })} className="nav-link" to="/courses">
              Courses
            </NavLink>
            <NavLink style={(isActive) => ({
                backgroundColor: isActive && "salmon",
              })} className="nav-link" to="/contact">
              Contact
            </NavLink>
            <NavLink className="nav-link" to="/paths">
              Paths
            </NavLink>
            <Nav.Link href="https://github.com/clarusway">GitHub</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
