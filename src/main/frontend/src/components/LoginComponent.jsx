import React, { Component, useState } from "react";
// import { useDispatch } from "react-redux";
import RestorePageIcon from "@mui/icons-material/RestorePage";
import LoginIcon from "@mui/icons-material/Login";

import { Container, Button, Paper } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import FormGroup from "@mui/material/FormGroup";

// import authenticateUser from "../index";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState;
  }

  initialState = {
    email: "",
    password: "",
  };

  resetLoginForm = () => {
    this.setState(() => this.initialState);
  };

  credentialChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h2 className="justify-content-center p-4 div">
          {/* {show && props.message && (
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
              {props.message}
            </Alert>
          )}
          {show && error && (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              {error}
            </Alert>
          )} */}
          <Paper style={{ display: "inline-block" }} width="20%">
            <h2 className="div justify-content-center p-4 ">Login </h2>
            <div>
              <Card style={{ display: "inline-block" }}>
                {/* <Form.Group> */}
                <div>
                  <FormGroup>
                    <div>
                      <input Width="10%" className>
                        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                      </input>

                      <FormGroup
                        required
                        autoComplete="off"
                        type="text"
                        name="email"
                        value={this.email}
                        //   onChange={credentialChange}
                        className={"bg-dark text-white"}
                        placeholder="Enter Email Address"
                      />
                    </div>
                  </FormGroup>
                </div>

                <FormGroup>
                  {/* <Form.Group> */}
                  <div>
                    <input Width="10%"></input>

                    <FormGroup
                      required
                      autoComplete="off"
                      type="password"
                      name="password"
                      value={this.password}
                      //   onChange={credentialChange}
                      className={"bg-dark text-white"}
                      placeholder="Enter Password"
                    />
                  </div>
                </FormGroup>
              </Card>
            </div>
            <Button
              size="sm"
              type="button"
              variant="success"
              // onClick={validateUser}
              startIcon={<LoginIcon />}
              // disabled={
              //   this.state.email.length === 0 ||
              //   this.state.password.length === 0
              // }
              onClick={() => {
                this.props.history.push("/upload_photos");
              }}
            >
              Login
            </Button>{" "}
            <Button
              onClick={() => {
                this.props.history.push("/register");
              }}
              size="sm"
              type="button"
              variant="info"
              startIcon={<PersonAddIcon />}
              // onClick={resetLoginForm}
              // disabled={
              //   this.state.email.length === 0 &&
              //   this.state.password.length === 0

              // }
            >
              Register
            </Button>
          </Paper>
        </h2>
      </div>
    );
  }
}

export default LoginComponent;
