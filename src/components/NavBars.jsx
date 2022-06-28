import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBars = () => {
    const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate("/")} >Home</Nav.Link>
            <Nav.Link onClick={()=> navigate("/update-profile")} >Update Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBars;
