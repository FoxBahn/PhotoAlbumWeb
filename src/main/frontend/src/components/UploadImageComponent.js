import React, { Component, useState, state, Dimensions, get } from "react";
import { Container, Button } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
// import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import { getStorage, ref } from "firebase/storage";
import { storage } from "../firebase";

// import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export default class UploadImageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // id: this.props.match.params.id,
      // url: "",
      // idUser: "",
      // photoName: "",

      image: null,
      viewImage: null,

      imageHeight: "",
      imageWidth: "",
      progress: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);

    //   this.cancelPhoto = this.cancelPhoto.bind(this);
    //   this.changeUrlhandler = this.changeUrlhandler.bind(this);
    //   this.changeIdUserHandler = this.changeIdUserHandler.bind(this);
    //   this.changePhotoNameHandler = this.changePhotoNameHandler.bind(this);
    //   this.changeSavePhoto = this.changeSavePhotoHandler.bind(this);
  }

  // //method to save enterd details to declaredvariables in above constructor
  // savePhoto(sP) {
  //   sP.preventDefault();
  //   let photo = {
  //     url: this.props.match.url,
  //     idUser: this.props.match.idUser,
  //     photoName: this.props.match.photoName,
  //   };
  //   console.log("photo=>" + JSON.stringify(photo));

  //   //create photo and return to list of photos PAGE
  // }

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
        // Progress func
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
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
        <h2 className="text-center p-2 div">Upload a New Photo</h2>
        <div className="div" align="left">
          <Paper elevation={3} className="div p-3">
            <form>
              <input type="file" onChange={this.handleChange}></input>
            </form>

            <div align="left" height="35%" width="35%">
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
              />
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
