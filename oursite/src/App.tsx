import React from "react";
import "./App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import { Contact, Development, Home } from "./components";
import { NavLink } from "react-router-dom";
function App() {
  return (
    <Container>
      <header>
        <h1>SAN Technology Consulting</h1>
        <p>Your go-to experts for software solutions</p>
      </header>

      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand>SAN Technology Consulting</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 mynav"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Item>
                <Nav.Link as={NavLink} to="/" eventKey={"Home"}>
                  Services
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={NavLink}
                  to="/Development"
                  eventKey={"Development"}
                >
                  Software Development
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/ContactUs" eventKey={"ContactUs"}>
                  Contact Us
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Development" element={<Development />} />
        <Route path="/ContactUs" element={<Contact />} />
      </Routes>
    </Container>
  );
}

export default App;
