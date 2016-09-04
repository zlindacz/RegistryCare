import React from 'react';

class CloudinaryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: ""}

    this.upload = this.upload.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(cloudinary_options, function(error, results) {
      if (!error){
        this.setState({image: results[0].url});
      }

    }.bind(this));
  }

  handleClick(e) {
    e.preventDefault();
    this.props.receiveInProgressUser(this.state);
    this.props.next();
  }

  render() {
    return(
      <form onSubmit={this.handleClick} className="upload-image-form" >
        <button onClick={this.upload} className="upload-button">Upload Profile Image</button>
        <img src={this.state.image} />
        <input type="submit" value="Next" className="next-button" />
      </form>
    )
  }
}

export default CloudinaryImage;
