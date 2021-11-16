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
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              {/*the <a></a> tag is used to put a link to another website in a word*/}
              <a className="navbar-brand ml=auto div">
                Photo Album Application
              </a>
              <li>
                <Link to="/upload_photos">Add Image</Link>{" "}
              </li>
              <li>
                <Link to="/photos">View My Images</Link>{" "}
              </li>
              {/* IMPORTANT !!!!!!!!!!!!!! 
              add page load event if button is clicked and 
              user that is loged in is not admin only user that is 
              logged in data is displayed and not all of the users */}
              <li>
                <Link to="/users">Manage Users</Link>{" "}
              </li>
              <li>
                <Link to="/login">Log Out</Link>{" "}
              </li>
            </div>
          </nav>
        </header>
      </Paper>
    );
  }
}
