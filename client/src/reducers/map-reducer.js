import {
  CHECK_ADDRESS_SUCCESS,
  CHECK_ADDRESS_ERROR,
  SET_BLANK
} from 'actions/address-actions';
import { CREATE_JOB_SUCCESS } from 'actions/jobs-actions';

const defaultState = {
  center: [48.863906, 2.317928],
  zoom: 15,
  googleMapsApiKey: 'AIzaSyAh2I1sHciIWJ-oPhOT1t_-kttQOFK9Afc',
  pickupMarker: null,
  dropoffMarker: null,
};

const markerMapping = {
  pickup: 'pickupMarker',
  dropoff: 'dropoffMarker',
};

export default (state = defaultState, action) => {
  const marker = markerMapping[action.addressType];
  let payload = {};

  switch(action.type) {
    case CHECK_ADDRESS_SUCCESS:
      payload = {
        [marker]: {
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      };

      return { ...state, ...payload };
    
    case CHECK_ADDRESS_ERROR:
      payload = {
        [marker]: null,
      };

      return { ...state, ...payload };

    case SET_BLANK:
      payload = {
        [marker]: null,
      };

      return { ...state, ...payload };

    case CREATE_JOB_SUCCESS:
      return { ...state, pickupMarker: null, dropoffMarker: null };

    default:
      return state;
  }
};