export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.updateMarker = this.updateMarker.bind(this);
    this._createMarkerFromUser = this._createMarkerFromUser.bind(this);
  };

  updateMarker(user) {
    this.user = user;
    this._createMarkerFromUser(user);
  };

  _createMarkerFromUser(user) {
    let center = {lat: user.latitude, lng: user.longitude}
    const marker = new google.maps.Marker({
      position: center,
      map: this.map
    });
  };

};
