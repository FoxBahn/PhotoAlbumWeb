import React, { Component } from "react";
import axios from "axios";

const PHOTO_API_BASE_URL = "http://localhost:8090/api/photos";
const SHARED_PHOTOS_API_BASE_URL = "http://localhost:8090/api/upload_photos";

class PhotoService {
  getPhotos(photo) {
    return axios.get(PHOTO_API_BASE_URL);
  }

  getPhotosByName(photoName) {
    return axios.get(PHOTO_API_BASE_URL + "/" + photoName);
  }

  //   //method to call REST API axios postMapping to create a new user
  //   createUser(user) {
  //     return axios.post(USER_API_BASE_URL, user);
  //   }
  //   getUserById(userId) {
  //     return axios.get(USER_API_BASE_URL + "/" + userId);
  //   }
  //   updateUser(user, userId) {
  //     return axios.put(USER_API_BASE_URL + "/" + userId, user);
  //   }
  deletePhoto(photoId) {
    return axios.delete(PHOTO_API_BASE_URL + "/" + photoId);
  }
}

export default new PhotoService();
