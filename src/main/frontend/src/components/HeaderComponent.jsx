import React, { Component } from "react";
import { Paper } from "@mui/material";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Paper elevation={3}>
        <header margin={20}>
          <nav className=" navbar-expand-md navbar-dark bg-dark navbar-right px-3 ">
            {/*the <a></a> tag is used to put a link to another website in a word*/}
            <a className="navbar-brand ml=auto px-5">Photo Album Application</a>
          </nav>

          <Navbar
            className="navbar-right .bg-secondary"
            bg="dark"
            variant="dark"
          >
            <Nav className="nav-item navbar-right px-3 ms-auto  m-2 .bg-secondary">
              <Link to="/upload_photos"> Add Image</Link>{" "}
            </Nav>
            <Nav className="navbar-right px-3">
              <Link to="/photos"> View My Images</Link>{" "}
            </Nav>
            {/* IMPORTANT !!!!!!!!!!!!!! 
              add page load event if button is clicked and 
              user that is loged in is not admin only user that is 
              logged in data is displayed and not all of the users */}

            <Nav className="navbar-right px-3">
              <Link to="/users"> Manage Users</Link>{" "}
            </Nav>
            <Nav className="navbar-right px-3">
              <Link to="/login"> Log Out</Link>{" "}
            </Nav>
          </Navbar>
        </header>
      </Paper>
    );
  }
}
