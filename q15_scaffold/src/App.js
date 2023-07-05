import React from "react";
import ImageList from "./components/ImageList";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      imageUrl: ""
    };
  }

  // Function to add image to local storage
  addImageToLS = () => {
    localStorage.setItem(
      "images",
      JSON.stringify([...this.state.images, this.state.imageUrl])
    );
  };

  // Function to get images from the local storage
  getImagesFromLS = () => {
    const images = localStorage.getItem("images");
    if (!images) {
      localStorage.setItem("images", []);
      return [];
    }
    return JSON.parse(images);
  };

  onAddImage = (e) => {
    e.preventDefault();
  };

  // Create function to set image url
  setUrl = () => {
    this.setState({
      imageUrl: this.state.imageUrl
    });
  }

  // Use appropriate lifecycle method to get images
  componentDidUpdate(){
    this.addImageToLS();
    this.setState({
      images: this.getImagesFromLS()
    });
  
  }

  render() {
    return (
      <>
        <form onSubmit={this.onAddImage}>
          <input
            type="text"
            placeholder="Image URL"
            value={this.state.imageUrl}
          />
          <button onClick={this.setUrl} >Add Image</button>
        </form>
        <ImageList images={this.state.images} />
      </>
    );
  }
}
