import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/Home">Home</Navbar.Brand>
        <Navbar.Brand href="/Skill">Skills</Navbar.Brand>
        <Navbar.Brand href="/About">About</Navbar.Brand>
        <Navbar.Brand href="/Contact">Contact me</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Header;
