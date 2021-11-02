import React, { Component } from "react";
import { Paper } from "@mui/material";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Paper elevation={3}>
        <header margin={20}>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark display flex">
            <div>
              <a className="navbar-brand"> Photo Album Application</a>
            </div>
          </nav>
        </header>
      </Paper>
    );
  }
}
