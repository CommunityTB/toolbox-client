import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import config from '../../config'

 class ToolBoxMap extends Component {
  
  render() {
    const mapStyles = {
      width: '100%',
      height: '320px',
    };
    return (
      <div className="toolboxMap" aria-label="map">
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
      </div>
    );
  }
}

  export default GoogleApiWrapper({
    apiKey: config.MAPS_API_KEY
  })(ToolBoxMap);