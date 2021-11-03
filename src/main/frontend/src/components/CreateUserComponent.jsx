import React, { Component } from "react";

export default class CreateUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  render() {
    return (
      <div>
        <h1>Edit Users</h1>
      </div>
    );
  }
}
