import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false
    };
  }

  // Use the required lifecycle methods here
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ photos: data, loading: false });
      });

  }

  render() {
    // Display loading status here

    return (

      this.state.loading ? (<p>Loading...</p>) : (
        <div className="App">
          {
            this.state.photos.map((photo) => {
              return <Image key={photo.id} photo={photo} />;
            }
            )}
        </div >)

    );
  }
}
