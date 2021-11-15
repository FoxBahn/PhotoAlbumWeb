import React, { Component } from "react";
import { Paper } from "@mui/material";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

//function that creates a navigation bar that shows words like register and login that can be clicked and takes the user to the related page
export default function HeaderComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to={""} className="navbar-brand"></Link>
      <Nav classname="navbar-right">
        <Link to={"register"} className="nav-link">
          Register New User
        </Link>
        <Link to={"login"} classname="nav-link">
          Login
        </Link>
      </Nav>
    </Navbar>
  );
}
