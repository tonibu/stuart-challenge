import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    <img src={pickupMarkerImg} lat={map.pickupMarker.latitude} lng={map.pickupMarker.longitude} />
  );

  map.dropoffMarker && markers.push(
    <img src={dropoffMarkerImg} lat={map.dropoffMarker.latitude} lng={map.dropoffMarker.longitude} />
  );

  return {
    markers,
    map,
  };
};

export default connect(mapStateToProps)(Map);
