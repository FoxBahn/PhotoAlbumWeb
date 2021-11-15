import { Container, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { Component } from "react";
import UserService from "../services/UserService";

import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  /*Add component of UserService to fetch users from DB (REST API calls come here) */
  componentDidMount() {
    UserService.getUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }

  // METHOD to rout to the "/delete-users/${id}" PAGE
  deleteUser(id) {
    UserService.deleteUser(id).then((res) => {
      this.setState({
        users: this.state.users.filter((user) => user.id !== user.id),
      });
    });
  }
  // METHOD to rout to the "/update-users/${id}" PAGE
  editUser(id) {
    this.props.history.push(`/update-users/${id}`);
  }

  // METHOD to rout to the "/add-user" PAGE
  addUser() {
    this.props.history.push("/add-users");
  }

  /* uSER tabe and the table BODY */
  render() {
    return (
      <div>
        <h2 className="text-center">List of Users</h2>
        <div className="div">
          <Button
            color="success"
            variant="contained"
            startIcon={<AddBoxIcon />}
            onClick={this.addUser}
          >
            {" "}
            Add User{" "}
          </Button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> First Name</th>
                <th> Last Name</th>
                <th> Cell Number</th>
                <th> Email</th>
                <th> User Access Type</th>
                <th> {/*Button Actions Column*/} </th>
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
                  <td>
                    <div className="div">
                      <Button
                        style={{ marginLeft: "10px" }}
                        variant="contained"
                        startIcon={<EditIcon />}
                        onClick={() => {
                          this.editUser(user.id);
                        }}
                        classname="p-5"
                      >
                        Edit
                      </Button>

                      <Button
                        style={{ marginLeft: "10px" }}
                        color="error"
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        onClick={() => {
                          this.deleteUser(user.id);
                        }}
                        classname="p-5"
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
