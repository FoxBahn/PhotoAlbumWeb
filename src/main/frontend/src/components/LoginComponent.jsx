import React, { Component, useState } from "react";
// import { useDispatch } from "react-redux";
import RestorePageIcon from "@mui/icons-material/RestorePage";
import LoginIcon from "@mui/icons-material/Login";
import {
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  FormControl,
  Button,
  Alert,
} from "react-bootstrap";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSignInAlt,
//   faEnvelope,
//   faLock,
//   faUndo,
// } from "@fortawesome/free-solid-svg-icons";

import authenticateUser from "../index";

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
      <Row className="justify-content-md-center">
        <Col xs={5}>
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
            <Card.Header>
              {/* <FontAwesomeIcon icon={faSignInAlt} /> Login */}
              <h2>Login</h2>
            </Card.Header>
            <Card.Body>
              <Form.Row>
                {/* <Form.Group> */}
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      required
                      autoComplete="off"
                      type="text"
                      name="email"
                      value={this.email}
                      //   onChange={credentialChange}
                      className={"bg-dark text-white"}
                      placeholder="Enter Email Address"
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  {/* <Form.Group> */}
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        {/* <FontAwesomeIcon icon={faLock} /> */}
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      required
                      autoComplete="off"
                      type="password"
                      name="password"
                      value={this.password}
                      //   onChange={credentialChange}
                      className={"bg-dark text-white"}
                      placeholder="Enter Password"
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
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
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default LoginComponent;
