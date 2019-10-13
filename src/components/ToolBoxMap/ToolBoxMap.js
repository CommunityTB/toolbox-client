import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import config from '../../config'

class ToolBoxMap extends Component {
  state = {
    showingInfoWindow: false,
    wd: '100%'
  };

  onMapReady = (mapProps, map) => {
    this.map = map;
    let mql = window.matchMedia('(max-width: 992px)');
    const screenWidthTest = (e) => {
      let wd = '100%'
      if (!e.matches) {
        /* the viewport is more than than 992 pixels wide */
        wd = '480px';
      }
      this.setState({ wd: wd })
      const currCenter = map.getCenter();
      this.props.google.maps.event.trigger(map, 'resize');
      map.setCenter(currCenter);
      
    }
    screenWidthTest(mql);
    mql.addListener(screenWidthTest);
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
      <div className="toolbox-map" aria-label="map">
        <Map
          initialCenter={{ lat: 38.5548665, lng: -121.6106212 }}
          className="map"
          google={this.props.google}
          onClick={this.onMapClicked}
          onReady={this.onMapReady}
          style={{ height: '360px', position: 'relative', width: this.state.wd }}
          zoom={12}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: config.MAPS_API_KEY
})(ToolBoxMap);