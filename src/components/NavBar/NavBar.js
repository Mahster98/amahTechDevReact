import React from "react";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { scroller, animateScroll as scroll } from "react-scroll";

function scrollToSection(sectionName) {
  scroller.scrollTo(sectionName, {
    smooth: true,
    duration: 1000,
  });
}

const NavBar = (props) => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand onClick={scroll.scrollToTop}>Alex Mah</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            onClick={() => {
              scrollToSection("About-Me");
            }}
          >
            About Me
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              scrollToSection("Projects");
            }}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              scrollToSection("Experience");
            }}
          >
            Experience
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              scrollToSection("Hobbies");
            }}
          >
            Hobbies
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
