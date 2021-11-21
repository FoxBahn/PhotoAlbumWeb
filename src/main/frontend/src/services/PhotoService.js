import React, { Component } from "react";
import axios from "axios";

const PHOTO_API_BASE_URL = "http://localhost:8090/api/photos";

const SHARED_PHOTO_API_BASE_URL = "http://localhost:8090/api/shared_photos";

class PhotoService {
  //method to call REST API axios postMapping to create a new user
  createPhoto(photo) {
    return axios.post(PHOTO_API_BASE_URL, photo);
  }

  getPhotos() {
    return axios.get(PHOTO_API_BASE_URL);
  }

  getSharedPhotos() {
    return axios.get(SHARED_PHOTO_API_BASE_URL);
  }

  getPhotoById(photoId) {
    return axios.get(PHOTO_API_BASE_URL + "/" + photoId);
  }

  getSharePhotoByUserId(userId) {
    return axios.get(SHARED_PHOTO_API_BASE_URL + "/" + userId);
  }

  updatePhoto(photo, photoId) {
    return axios.put(PHOTO_API_BASE_URL + "/" + photoId, photo);
  }

  deletePhoto(photoId) {
    return axios.delete(PHOTO_API_BASE_URL + "/" + photoId);
  }
}

export default new PhotoService();
