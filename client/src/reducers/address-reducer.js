import {
  CHECK_ADDRESS_SUCCESS,
  CHECK_ADDRESS_ERROR,
  SET_BLANK
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
  let payload = {};
  
  switch (action.type) {
    case CHECK_ADDRESS_SUCCESS:
      payload = {
        [action.addressType]: {
          ...action.payload,
          state: 'success',
        },
      };

      return { ...state, ...payload };

    case CHECK_ADDRESS_ERROR:
      payload = {
        [action.addressType]: getErrorPayload(),
      };

      return { ...state, ...payload };

    case SET_BLANK:
      payload = {
        [action.addressType]: getBlankPayload(),
      };

      return { ...state, ...payload };

    case CREATE_JOB_SUCCESS:
      return {
        pickup: getBlankPayload(),
        dropoff: getBlankPayload()
      };

    default:
      return state;
  }
};