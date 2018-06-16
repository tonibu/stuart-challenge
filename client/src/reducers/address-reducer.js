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
  pickup: {
    state: 'blank',
    address: '',
    latitude: null,
    longitude: null,
  },
  dropoff: {
    state: 'blank',
    address: '',
    latitude: null,
    longitude: null,
  },
};

const getErrorPayload = () => ({
  state: 'error',
  address: '',
  latitude: null,
  longitude: null,
});

const getBlankPayload = () => ({
  state: 'blank',
  address: '',
  latitude: null,
  longitude: null,
});

export default (state = defaultState, action) => {
  let pickupPayload = {};
  let dropoffPayload = {};
  
  switch (action.type) {
    case PICKUP_CHECK_SUCCESS:
      pickupPayload = { ...action.payload, state: 'success' };
      return { ...state, pickup: pickupPayload };

    case PICKUP_CHECK_ERROR:
      return { ...state, pickup: getErrorPayload() };

    case PICKUP_SET_BLANK:
      return { ...state, pickup: getBlankPayload() };

    case DROPOFF_CHECK_SUCCESS:
      dropoffPayload = { ...action.payload, state: 'success' };
      return { ...state, dropoff: dropoffPayload };

    case DROPOFF_CHECK_ERROR:
      return { ...state, dropoff: getErrorPayload() };

    case DROPOFF_SET_BLANK:
      return { ...state, dropoff: getBlankPayload() }

    case CREATE_JOB_SUCCESS:
      return { pickup: getBlankPayload(), dropoff: getBlankPayload() };

    default:
      return state;
  };
};