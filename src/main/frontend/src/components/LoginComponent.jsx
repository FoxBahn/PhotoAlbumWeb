import React, { Component, useState } from "react";
// import { useDispatch } from "react-redux";
import RestorePageIcon from "@mui/icons-material/RestorePage";
import LoginIcon from "@mui/icons-material/Login";

import { Container, Button } from "@mui/material";

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
        <h2 className="justify-content-md-center">
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
          <Card className={"border border-dark bg-dark text-white"}>
            <CardHeader>
              {/* <FontAwesomeIcon icon={faSignInAlt} /> Login */}
              <h2>Login</h2>
            </CardHeader>
            <Card>
              <FormGroup>
                {/* <Form.Group> */}
                <FormGroup>
                  <input>{/* <FontAwesomeIcon icon={faEnvelope} /> */}</input>

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
                </FormGroup>
              </FormGroup>

              <FormGroup>
                {/* <Form.Group> */}

                <input>{/* <FontAwesomeIcon icon={faLock} /> */}</input>

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
              </FormGroup>
            </Card>
            <CardHeader style={{ textAlign: "right" }}>
              <Button
                size="sm"
                type="button"
                variant="success"
                // onClick={validateUser}
                startIcon={<LoginIcon />}
                disabled={
                  this.state.email.length === 0 ||
                  this.state.password.length === 0
                }
              >
                Login
              </Button>{" "}
              <Button
                size="sm"
                type="button"
                variant="info"
                startIcon={<RestorePageIcon />}
                // onClick={resetLoginForm}
                disabled={
                  this.state.email.length === 0 &&
                  this.state.password.length === 0
                }
              >
                Reset
              </Button>
            </CardHeader>
          </Card>
        </h2>
      </div>
    );
  }
}

export default LoginComponent;
