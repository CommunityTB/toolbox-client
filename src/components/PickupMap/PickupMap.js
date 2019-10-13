import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import config from '../../config'

class PickupMap extends Component {
  // state = {
  //   mapStyles: {
  //     width: '480px',
  //     height: '360px'
  //   }
  // }
  // render() {
  //   return (
  //     <div className="toolbox-map" aria-label="map">
  //       <Map
  //         google={this.props.google}
  //         zoom={8}
  //         style={this.state.mapStyles}
  //         initialCenter={{ lat: 38.4412682, lng: -122.7128176 }}
  //       />
  //     </div>
  //   );
  // }
  state = {
    showingInfoWindow: false,
    wd: '100%'
  };

  onMapReady = (mapProps, map) => {
    this.map = map;

    window.onresize = () => {
      const currCenter = map.getCenter();
      this.props.google.maps.event.trigger(map, 'resize');
      map.setCenter(currCenter);
      //console.log(map);
      this.setState({wd: '200px'})
    };
  };

  onMarkerClick = () => this.setState({ showingInfoWindow: true });

  onInfoWindowClose = () => this.setState({ showingInfoWindow: false });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({ showingInfoWindow: false });
  };

  render() {
    if (!this.props.loaded) return <div>Loading...</div>;
    return (
      <Map
        centerAroundCurrentLocation
        className="map"
        google={this.props.google}
        onClick={this.onMapClicked}
        onReady={this.onMapReady}
        style={{ height: '360px', position: 'relative', width: this.state.wd }}
        zoom={14}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: config.MAPS_API_KEY
})(PickupMap);