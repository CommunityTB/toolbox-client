import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


 class ToolBoxMap extends Component {
  
  render() {
    const mapStyles = {
      width: '100%',
      height: '200px',
    };
    return (
      <div className="toolboxMap" aria-label="map">
        <p>Our location</p>
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
    apiKey: 'AIzaSyDNgxQ8uYfWohowute6UUSbmTcSGVN4G-4'
  })(ToolBoxMap);