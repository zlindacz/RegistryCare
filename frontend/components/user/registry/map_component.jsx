import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   center: {lat: 37.7749, lng: -122.4194}, // SF, CA
    //   address: this.props.user.address1 + ' ' +
    //            this.props.user.city + ' ' +
    //            this.props.user.state + ' ' +
    //            this.props.user.zipcode
    //          }

    this.makeMap = this.makeMap.bind(this);
    // this.getCoords = this.getCoords.bind(this);
    this.markMap = this.markMap.bind(this);
    this.displayMap = this.displayMap.bind(this);
  }

  componentDidMount() {

    let map = this.makeMap();
    this.displayMap(map);
  }

  componentDidUpdate() {
    let map = this.makeMap();
    this.displayMap(map);

  }

  makeMap() {
    const _mapOptions = {
      center: this.props.center,
      zoom: 11
    };
    const map = this.refs.map;
    return new google.maps.Map(map, _mapOptions);
  }

  displayMap(map) {
    map.setCenter(this.props.center);
    this.markMap(this.props.center, map);
  }

  markMap(coords, map) {
    return new google.maps.Marker({
      map: map,
      position: coords
    });
  }

  // componentDidMount() {
  //   let map = this.makeMap();
  //   this.displayMap(map);
  //
  //   // this.getCoords()
  //   // .then(coords => {
  //   //   this.setState({center: {lat: coords.lat, lng: coords.lng}});
  //   //   // console.log(typeof coords);
  //   //   // console.log(coords);
  //   //   console.log("when does this get executed?");
  //   //   console.log(this.state.center);
  //   // });
  //
  //   // console.log("this should be displayed last " + this.state.center);
  // }
  //
  // makeMap() {
  //   const _mapOptions = {
  //     center: this.props.center,
  //     zoom: 11
  //   };
  //   const map = this.refs.map;
  //   return new google.maps.Map(map, _mapOptions);
  // }
  //
  // displayMap(map) {
  //   // map.setCenter(this.props.center);
  //   this.markMap(this.props.center, map);
  // }
  //
  // markMap(coords, map) {
  //   return new google.maps.Marker({
  //     map: map,
  //     position: coords
  //   });
  // }

  // getCoords() {
  //   let geocoder = new google.maps.Geocoder();
  //   return new Promise((resolve, reject) => {
  //     geocoder.geocode( {'address': this.state.address}, (results, status) => {
  //       if (status === 'OK') {
  //         let coords = results[0].geometry.location;
  //         let lat = coords.lat();
  //         let lng = coords.lng();
  //         console.log("inside getCoords " + lat);
  //         console.log("inside getCoords " + lng);
  //         // let pos = new google.maps.LatLng(coords.lat(), coords.lng());
  //         resolve({lat: lat, lng: lng});
  //       } else {
  //         console.log("Could not find because: " + status);
  //       };
  //     });
  //   });
  // }





  // getCoords() {
  //   let geocoder = new google.maps.Geocoder();
  //   return new Promise((resolve, reject) => {
  //     geocoder.geocode( {'address': this.address}, (results, status) => {
  //       if (status === 'OK') {
  //         let coords = results[0].geometry.location;
  //         let pos = new google.maps.LatLng(coords.lat(), coords.lng());
  //         resolve(pos);
  //       } else {
  //         console.log("Could not find because: " + status);
  //       };
  //     });
  //   });
  // }




  // componentDidMount() {
  //   let map = this.makeMap();
  //   let geocoder = new google.maps.Geocoder();
  //   this.placeMarker(geocoder, map)
  //     .then(render());
  // }
  //
  // makeMap() {
  //   const mapDOMNode = this.refs.map;
  //   const mapOptions = {
  //     center: this.center,
  //     zoom: 11
  //   };
  //   return new google.maps.Map(mapDOMNode, mapOptions);
  // }
  //
  // placeMarker(geocoder, map) {
  //   return new Promise((resolve, reject) => {
  //     geocoder.geocode( {'address': this.address}, (results, status) => {
  //       if (status === 'OK') {
  //         let location = results[0].geometry.location;
  //         map.setCenter(location);
  //         const marker = new google.maps.Marker({
  //           map: map,
  //           position: location
  //         });
  //         resolve(marker);
  //       } else {
  //         reject(err);
  //         console.log("Could not find because: " + status);
  //       };
  //     });
  //   });
  // }

  render() {
    return(
      <div id="map-container" ref="map"></div>
    )
  }
}

export default Map;
