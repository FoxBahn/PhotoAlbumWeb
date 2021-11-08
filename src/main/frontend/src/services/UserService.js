import React, { Component } from "react";
import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8090/api/users";

class UserService {
  //method to call REST API axios getMapping api to view all user
  getUsers() {
    return axios.get(USER_API_BASE_URL);
  }
  //method to call REST API axios postMapping to create a new user
  createUser(user) {
    return axios.post(USER_API_BASE_URL, user);
  }
}

export default new UserService();
