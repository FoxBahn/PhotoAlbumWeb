import React, { Component } from "react";

class UploadImageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = this;
  }

  render() {
    return (
      <div>
        <h2 className="text-center p-2">Upload a New Photo</h2>
        <div className="div">
          <form>
            <input type="file"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default UploadImageComponent;
