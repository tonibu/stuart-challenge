import React from 'react';
import { connect } from 'react-redux';
import GoogleMap from 'google-map-react';
import pickupMarkerImg from 'images/pickup_marker.svg';
import dropoffMarkerImg from 'images/dropoff_marker.svg';

const Map = (props) => (
  <GoogleMap
    center={props.map.center}
    zoom={props.map.zoom}
    bootstrapURLKeys={{
      key: props.map.googleMapsApiKey
    }}
    options={{
      scrollwheel: false
    }}>
      {props.markers}
  </GoogleMap>
);

const mapStateToProps = (state) => {
  const map = state.map;
  const markers = [];

  map.pickupMarker && markers.push(
    createMarker('pickup', pickupMarkerImg, map.pickupMarker)
  );

  map.dropoffMarker && markers.push(
    createMarker('dropoff', dropoffMarkerImg, map.dropoffMarker)
  );

  return {
    markers,
    map,
  };
};

const createMarker = (key, src, geo) => (
  <img key={key} src={src} lat={geo.latitude} lng={geo.longitude} alt={key} />
);

export default connect(mapStateToProps)(Map);
