import { Container, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { Component } from "react";
import PhotoService from "../services/PhotoService";

import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],

      image: null,
      viewImage: null,

      imageHeight: "",
      imageWidth: "",
    };

    this.addPhoto = this.addPhoto.bind(this);
    this.editPhoto = this.editPhoto.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
  }

  /*Add component of UserService to fetch users from DB (REST API calls come here) */
  componentDidMount() {
    {
      /* IMPORTANT !!!!!!!!!!!!!! add page load event if button is clicked and
              user that is loged in is not admin only user that is 
              logged in data is displayed and not all of the users */
    }

    PhotoService.getPhotos().then((res) => {
      this.setState({ photos: res.data });
    });
  }

  // METHOD to rout to the "/delete-users/${id}" PAGE
  deletePhoto(id) {
    PhotoService.deletePhoto(id).then((res) => {
      this.setState({
        photos: this.state.photos.filter((photo) => photo.id !== photo.id),
      });
    });
  }
  // METHOD to rout to the "/update-users/${id}" PAGE
  editPhoto(id) {
    this.props.history.push(`/photos/${id}`);
  }

  // METHOD to rout to the "/add-user" PAGE
  addPhoto() {
    this.props.history.push("/upload_photos");
  }

  /* uSER tabe and the table BODY */
  render() {
    return (
      <div>
        <h2 className="text-center">List of Photos</h2>
        <div className="div">
          <Button
            color="success"
            variant="contained"
            startIcon={<AddBoxIcon />}
            onClick={this.addUser}
          >
            Add User{" "}
          </Button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Image</th>
                <th> Image Name</th>

                <th> {/*Button Actions Column*/} </th>
              </tr>
            </thead>

            <tbody>
              {this.state.photos.map((photo) => (
                <tr key={photo.id}>
                  <img
                    className="div"
                    style={{
                      // flex: 1,
                      height: this.imageHeight,
                      width: this.imageWidth,
                      // figure out your image aspect ratio
                      aspectRatio: 16 / 9,
                    }}
                    src={
                      photo.urlLocation ||
                      "https://i1.wp.com/feelsafemask.in/wp-content/uploads/2020/09/qi-bin-w4hbafegiac-unsplash.jpg?resize=300%2C&ssl=1"
                    }
                    alt="Uploaded image"
                    height="300"
                    widdth="400"
                  ></img>{" "}
                  {/*references the tableName.columnName*/}
                  <td>{photo.photoName}</td>
                  <td>
                    <div className="div">
                      <Button
                        style={{ marginLeft: "10px" }}
                        variant="contained"
                        startIcon={<EditIcon />}
                        onClick={() => {
                          this.editPhoto(photo.id);
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
                          if (
                            window.confirm(
                              "Are you sure you wish to delete this photo?"
                            )
                          )
                            this.deletePhoto(photo.id);
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
