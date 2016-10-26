import React from 'react';
import MarkerManager from './marker_manager';

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.center = {lat: this.props.user.latitude, lng: this.props.user.longitude}
    this.makeMap = this.makeMap.bind(this);
  }

  componentDidMount() {
    let map = this.makeMap();
    this.MarkerManager = new MarkerManager(map);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarker(this.props.user);
  }

  makeMap() {
    const map = this.refs.map;
    const _mapOptions = {
      center: this.center,
      zoom: 11
    };
    return new google.maps.Map(map, _mapOptions);
  }

  render() {
    return(
      <div id="map-container" ref="map"></div>
    )
  }
}

export default Map;
