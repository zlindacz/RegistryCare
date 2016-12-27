import React from 'react';

class CloudinaryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photo: this.props.user.inProgressUser.photo || ""}

    this.upload = this.upload.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(cloudinary_options, function(error, results) {
      if (!error){
        this.setState({photo: results[0].url});
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
      <form onSubmit={this.handleClick} className="form-and-button" >
        <div className="upload-image-form">
          <div className="image-container">
            <img className="image"
                 src={this.state.photo}
                 alt="organization's profile photo"/>
          </div>
          <button onClick={this.upload} className="choose-button">Choose Photo</button>
        </div>
        <input type="submit" value="Next" className="signup-next-button" />
      </form>
    )
  }
}

export default CloudinaryImage;
