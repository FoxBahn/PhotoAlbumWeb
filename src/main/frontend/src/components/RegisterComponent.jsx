import React, { Component } from "react";
import UserService from "../services/UserService";

export default class RegisterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // id: this.match.params.id,
      firstName: "",
      lastName: "",
      cell: "",
      email: "",
      type: "",
      password: "",
    };

    this.cancelUser = this.cancelUser.bind(this);

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeCellHandler = this.changeCellHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeTypeHandler = this.changeTypeHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }
  saveUser = (sU) => {
    sU.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      cell: this.state.cell,
      email: this.state.email,
      type: this.state.type,
      password: this.state.password,
    };
    console.log("user=> " + JSON.stringify(user));

    //setup to create user and return to user page
    UserService.createUser(user).then((res) => {
      this.props.history.push("/users");
    });
  };

  //method to cancel the edit and move back to Users PAGE and view users
  cancelUser() {
    this.props.history.push("/users");
  }

  //event handlers
  changeFirstNameHandler(event) {
    this.setState({ firstName: event.target.value });
  }

  changeLastNameHandler(event) {
    this.setState({ lastName: event.target.value });
  }

  changeCellHandler(event) {
    this.setState({ cell: event.target.value });
  }

  changeEmailHandler(event) {
    this.setState({ email: event.target.value });
  }

  changeTypeHandler(event) {
    this.setState({ type: event.target.value });
  }

  changePasswordHandler(event) {
    this.setState({ password: event.target.value });
  }
  render() {
    return (
      <div>
        <div className="container p-5">
          <div className="row">
            <div class="card col-md-6 ofsett-md-3 offset-md-3">
              <h3 className="text-centre p-2 div"> Add User </h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    {/* //firstName= */}
                    <label>First Name: </label>
                    <input
                      placeholder="eg. Micheal"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                    {/* //lastName= */}
                    <label>Last Name: </label>
                    <input
                      placeholder="eg. Smith"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                    {/* //cell=     */}
                    <label>Cell Number: </label>
                    <input
                      placeholder="eg. 0718994789"
                      name="cell"
                      className="form-control"
                      value={this.state.cell}
                      onChange={this.changeCellHandler}
                    />
                    {/* //email=     */}
                    <label>Email Address: </label>
                    <input
                      placeholder="eg. ms@gmail.com"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                    {/* //type=     */}
                    <label>Type: </label>
                    <input
                      placeholder="eg. A "
                      name="type"
                      className="form-control"
                      value={this.state.type}
                      onChange={this.changeTypeHandler}
                    />
                    {/* //password=     */}
                    <label>Password: </label>
                    <input
                      autocomplete="off" //disables history on the input field
                      placeholder="eg. MS1234"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                    />
                    {/* save button */}
                  </div>
                  <button
                    className="btn btn-success m-2"
                    onClick={this.saveUser}
                  >
                    Save
                  </button>
                  {/* cancel button */}
                  <button
                    className="btn btn-danger m-2"
                    onClick={this.cancelUser.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
