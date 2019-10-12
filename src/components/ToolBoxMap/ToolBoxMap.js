import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import config from '../../config'

class ToolBoxMap extends Component {
  state = {
    mapStyles: {
      width: '480px',
      height: '360px'
    }
  }
  render() {
    return (
      <div className="toolbox-map" aria-label="map">
        <Map
          google={this.props.google}
          zoom={8}
          style={this.state.mapStyles}
          initialCenter={{ lat: 38.4412682, lng: -122.7128176 }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: config.MAPS_API_KEY
})(ToolBoxMap);