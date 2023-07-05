import React from "react";
import Image from "./Image";

export default class ImageList extends React.Component {
  // Lifecycle method to prevent re render of the list if some spaces are present
  shouldComponentUpdate(nextProps, nextState) {
    // Check if the images prop has changed
    if (nextProps.images !== this.props.images) {
      // Check if there are any empty spaces in the new images array
      const hasEmptySpaces = nextProps.images.some((image) => image.trim() === " ");

      // Prevent re-rendering if there are empty spaces
      return !hasEmptySpaces;
    }
    

    // Re-render for other prop changes
    return true;
  }

  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image, index) => {
          return <Image key={index} image={image} />;
        })}
      </div>
    );
  }
}
