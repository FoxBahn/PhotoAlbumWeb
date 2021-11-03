import React, { Component } from "react";
import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8090/api/users";

class UserService {
  getUsers() {
    return axios.get(USER_API_BASE_URL);
  }
}

export default new UserService();