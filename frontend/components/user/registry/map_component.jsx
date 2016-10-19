import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: {lat: 37.7749, lng: -122.4194},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }

  render() {
    return(
      <div id="map-container" ref="map">Map is here!</div>
    )
  }
}

export default Map;
