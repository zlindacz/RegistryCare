import React from 'react';
import { withRouter } from 'react-router';
import Map from './map_component';

class UserRegistry extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address: null,
      // center: {lat: 37.7749, lng: -122.4194}
      center: null
    };
    this.getAddress = this.getAddress.bind(this);
    this.getCoords = this.getCoords.bind(this);
    this.convertAddressToCenter = this.convertAddressToCenter.bind(this);
  };

  componentDidMount() {
    console.log('before update');
    this.props.requestSingleUser(this.props.params.userId);
  };

  componentDidUpdate() {
    console.log('updated');
    if (this.state.address === null) {
      let address = this.getAddress();
      this.setState({address: address});
    }
    if (this.state.center === null) {
      this.getCoords()
        .then(coords => this.convertAddressToCenter(coords));
    }
  }

  getAddress() {
    if (this.props.user) {
      return (this.props.user.address1 + ' ' +
              this.props.user.address2 + ' ' +
              this.props.user.city + ' ' +
              this.props.user.state + ' ' +
              this.props.user.zipcode
            );
    }
  }

  getCoords() {
    let geocoder = new google.maps.Geocoder();
    return new Promise((resolve, reject) => {
      geocoder.geocode( {'address': this.getAddress()}, (results, status) => {
        if (status === 'OK') {
          let coords = results[0].geometry.location;
          let lat = coords.lat();
          let lng = coords.lng();
          // console.log("inside getCoords " + lat);
          // console.log("inside getCoords " + lng);
          let pos = new google.maps.LatLng(coords.lat(), coords.lng());
          // resolve({lat: lat, lng: lng});
          resolve(pos);
        } else {
          console.log("Could not find because: " + status);
        };
      });
    });
  }

  convertAddressToCenter(coords) {
    this.setState({center: coords});
  }

  render(){
    console.log(this.state);
    const user = this.props.user;
    if (!user) {return (<div>loading</div>);};

    let items = user.items.map(item => {
      return (<li className="paragraph-end" key={item.id}>{item.name}</li>);
    });

    let showAddress2;
    showAddress2 = (user.address2 === "" ? "no-show" : "contact-info");
    return(
      <div className="registry-parent">
        <h1 className="registry-tagline">{user.organization_name}</h1>

        <div className="registry-show">
          <img className="logo-photo" src={user.photo} />

          <div className="registry-block">
            <h3 className="registry-subtitle">Category:</h3>
            <div className="category-text">
              <p className="paragraph" key={user.category.id}>{user.category.name}</p>
            </div>
          </div>

          <div className="registry-block">
            <h3 className="registry-subtitle">Contact:</h3>
            <div className="address-block">
              <p className="paragraph-end">{user.address1}</p>
              <p className={showAddress2}>{user.address2}</p>
              <p className="paragraph-end">{user.city}, {user.state} {user.zipcode}</p>
            </div>
          </div>

          <div className="registry-block">
            <h3 className="registry-subtitle">Description:</h3>
            <p className="paragraph-end">{user.description}</p>
          </div>

          <div className="registry-block">
            <h3 className="registry-subtitle">Items needed:</h3>
            <ul className="address-block">{items}</ul>
          </div>
        </div>

        <Map center={this.center} />
      </div>
    );
  }
};

export default withRouter(UserRegistry);
