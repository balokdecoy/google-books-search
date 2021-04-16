import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function () {
  return (<div>
    <Navbar bg="dark" variant="dark" expand="lg" style={{width: "100%"}}>
  <Navbar.Brand>Google Books Search</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Search</Nav.Link>
      <Nav.Link href="/saved">Saved</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </div>
  );
}