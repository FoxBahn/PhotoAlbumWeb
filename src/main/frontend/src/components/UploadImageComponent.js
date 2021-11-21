import React, { Component, useState, state, Dimensions, get } from "react";
import { Container, Button } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
// import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import { getStorage, ref } from "firebase/storage";
import { storage } from "../firebase";
import PhotoService from "../services/PhotoService";

// import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export default class UploadImageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      url: "",
      idUser: "4",
      photoName: "",
      ////////
      image: null,
      viewImage: null,
      ////////
      imageHeight: "",
      imageWidth: "",
      progress: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    ////////
    this.cancelPhoto = this.cancelPhoto.bind(this);
    // this.changeUrlhandler = this.changeUrlHandler.bind(this);
    // this.changeIdUserHandler = this.changeIdUserHandler.bind(this);
    this.changePhotoNameHandler = this.changePhotoNameHandler.bind(this);
    this.savePhoto = this.savePhoto.bind(this);
  }

  //method to save enterd details to declaredvariables in above constructor
  savePhoto(sP) {
    {
      //complete func
      storage
        .ref("photos")
        .getDownloadURL()
        .then((url) => {
          console.log(url);
          this.setState({ url });
        });
    }

    sP.preventDefault();
    let photo = {
      url: this.state.url,
      idUser: this.state.idUser,
      photoName: this.state.photoName,
    };
    console.log("photo=>" + JSON.stringify(photo));

    //create photo and return to list of photos PAGE
    PhotoService.createPhoto(photo).then((res) => {
      this.props.history("/photos");
    });
  }

  cancelPhoto() {
    this.props.history.push("/photos");
  }

  changeUrlhandler(event) {
    this.setState({ url: event.target.value });
  }

  changeIdUserHandler(event) {
    this.setState({ idUser: event.target.value });
  }

  changePhotoNameHandler(event) {
    this.setState({ photoName: event.target.value });
  }

  /////////////
  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
      const viewImage = e.target.files[0];
      ////
      ////
      const imageHeight = Math.round((viewImage.width * 9) / 16);
      const imageWidth = viewImage.width;
      ////
      ////
      this.setState(() => ({
        viewImage: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`photos/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //Progress func
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 125
        );
        this.setState({ progress });
      },
      (error) => {
        //Error func
        console.log(error);
      },
      () => {
        //complete func
        storage
          .ref("photos")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };

  render() {
    return (
      <div>
        <h2 className="text-center p-4">Upload a New Photo</h2>
        <div className="div" align="left">
          <Paper elevation={3} className="div p-3">
            <form>
              <input type="file" onChange={this.handleChange}></input>
            </form>
            <div align="left" height="35%" width="35%">
              <form>
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
                    this.state.viewImage ||
                    "https://i1.wp.com/feelsafemask.in/wp-content/uploads/2020/09/qi-bin-w4hbafegiac-unsplash.jpg?resize=300%2C&ssl=1"
                  }
                  alt="Uploaded image"
                  height="300"
                  widdth="400"
                  onChange={(this.changeUrlhandler, this.changeIdUserHandler)}
                />
                {/* ////////////////////// beginning of lables and fields /////////////////////*/}
                {/* <div>
                <div className="container p-5">
                  <div className="row">
                    <div class="card col-md-6 ofsett-md-3 offset-md-3">
                      <h3 className="text-centre p-2"> Add Image</h3>
                      <div className="card-body"> */}

                <div className="form-group">
                  {/* //photoName= */}
                  <label>Photo Name: </label>
                  <input
                    placeholder="eg. Animals"
                    name="photoName"
                    className="form-control"
                    value={this.state.photoName}
                    onChange={this.changePhotoNameHandler}
                  />
                </div>

                {/* cancel button */}
                <button
                  className="btn btn-danger m-2"
                  onClick={this.cancelPhoto.bind(this)}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
              {/* </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* ////////////////////// end of lables and fields /////////////////////*/}
            </div>
            <div align="left" className="div">
              <Stack spacing={2} direction="row" className="div">
                <Button
                  color="success"
                  variant="contained"
                  startIcon={<AddPhotoAlternateIcon />}
                  onClick={this.handleUpload}
                >
                  Upload
                </Button>
                <progress
                  value={this.state.progress}
                  max="125"
                  variant="information"
                />
              </Stack>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
