import {
  PICKUP_CHECK_SUCCESS,
  PICKUP_CHECK_ERROR,
  PICKUP_SET_BLANK,
  DROPOFF_CHECK_SUCCESS,
  DROPOFF_CHECK_ERROR,
  DROPOFF_SET_BLANK
} from 'actions/address-actions';
import { CREATE_JOB_SUCCESS } from 'actions/jobs-actions';

const defaultState = {
  center: [48.863906, 2.317928],
  zoom: 15,
  googleMapsApiKey: 'AIzaSyAh2I1sHciIWJ-oPhOT1t_-kttQOFK9Afc',
  pickupMarker: null,
  dropoffMarker: null,
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case PICKUP_CHECK_SUCCESS:
      return { ...state, pickupMarker: {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      }};
    
    case PICKUP_CHECK_ERROR:
      return { ...state, pickupMarker: null, };
    
    case PICKUP_SET_BLANK:
      return { ...state, pickupMarker: null, };
    
    case DROPOFF_CHECK_SUCCESS:
      return { ...state, dropoffMarker: {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      }};

    case DROPOFF_CHECK_ERROR:
      return { ...state, dropoffMarker: null, };

    case DROPOFF_SET_BLANK:
      return { ...state, dropoffMarker: null, };

    case CREATE_JOB_SUCCESS:
      return { ...state, pickupMarker: null, dropoffMarker: null };

    default:
      return state;
  };
};