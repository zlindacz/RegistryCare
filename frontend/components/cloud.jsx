import React from 'react';
import ReactDOM from 'react-dom';
import UploadButton from "./components/cloudinary/UploadButton";
import ImageList from "./components/cloudinary/ImageList";

class Images extends React.Component {

  getInitialState() {
    return { images: [] };
  }

  componentDidMount() {
    $.get("/api/images", function (images) {
      this.setState({images: images});
    }.bind(this))
  }

  postImage(image) {
    var data = {image: {url: image.url}};
    $.post("/api/images", data, function (savedImage) {
      var images = this.state.images;
      images.push(savedImage);
      this.setState({ images: images });
    }.bind(this));
  }

  render() {
    return (
      <div>
        <UploadButton postImage={this.postImage}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
});

document.addEventListener( 'DOMContentLoaded', function () {
  ReactDOM.render(
    <Images/>,
    document.getElementById('root')
  );
}, false );
