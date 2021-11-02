import React, { Component } from "react";
import UserService from "../services/UserService";

export default class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  /*Add component of UserService to fetch users from DB (REST API calls come here) */
  componentDidMount() {
    UserService.getUsers().then((response) => {
      this.setState({ users: response.data });
    });
  }

  /* uSER tabe and the table BODY */
  render() {
    return (
      <div>
        <h2 className="text-center">List of Users</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> First Name</th>
                <th> Last Name</th>
                <th> Cell Number</th>
                <th> Email</th>
                <th> User Access Type</th>
              </tr>
            </thead>

            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.firstName}</td>{" "}
                  {/*references the tableName.columnName*/}
                  <td>{user.lastName}</td>
                  <td>{user.cell}</td>
                  <td>{user.email}</td>
                  <td>{user.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
