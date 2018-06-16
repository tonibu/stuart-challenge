export const CHECK_ADDRESS = 'CHECK_ADDRESS';
export const PICKUP_CHECK_SUCCESS = 'PICKUP_CHECK_SUCCESS';
export const PICKUP_CHECK_ERROR = 'PICKUP_CHECK_ERROR';
export const PICKUP_SET_BLANK = 'PICKUP_SET_BLANK';
export const DROPOFF_CHECK_SUCCESS = 'DROPOFF_CHECK_SUCCESS';
export const DROPOFF_CHECK_ERROR = 'DROPOFF_CHECK_ERROR';
export const DROPOFF_SET_BLANK = 'DROPOFF_SET_BLANK';

const addressType = {
  pickup: 'PICKUP',
  dropoff: 'DROPOFF',
};

export const checkPickupAddress = (address) => dispatch => {
  dispatch(checkAddress(address, addressType.pickup));
};

export const checkDropoffAddress = (address) => dispatch => {
  dispatch(checkAddress(address, addressType.dropoff));
};

export const checkAddress = (address, addressType) => (dispatch) => {
  const action = {
    type: CHECK_ADDRESS,
    fetchConfig: {
      path: 'http://localhost:4000/geocode',
      body: {
        address,
      },
    },
  };

  return dispatch(action)
    .then((json) => dispatch(checkAddressSuccess(json, addressType)))
    .catch(() => dispatch(checkAddressError(addressType)));
}

export const checkAddressSuccess = (payload, addressType) => {
  const type = `${addressType}_CHECK_SUCCESS`;

  return {
    type,
    payload,
  };
};

export const checkAddressError = (addressType) => {
  const type = `${addressType}_CHECK_ERROR`;

  return {
    type,
  };
};

export const setPickupBlank = () => ({
  type: PICKUP_SET_BLANK,
});

export const setDropoffBlank = () => ({
  type: DROPOFF_SET_BLANK,
});