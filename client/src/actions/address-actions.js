export const CHECK_ADDRESS = 'CHECK_ADDRESS';
export const CHECK_ADDRESS_SUCCESS = 'CHECK_ADDRESS_SUCCESS';
export const CHECK_ADDRESS_ERROR = 'CHECK_ADDRESS_ERROR';
export const SET_BLANK = 'SET_BLANK';

const addressType = {
  pickup: 'pickup',
  dropoff: 'dropoff',
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

export const checkAddressSuccess = (payload, addressType) => ({
  type: CHECK_ADDRESS_SUCCESS,
  addressType,
  payload,
});

export const checkAddressError = (addressType) => ({
  type: CHECK_ADDRESS_ERROR,
  addressType,
});

export const setPickupBlank = () => ({
  type: SET_BLANK,
  addressType: addressType.pickup,
});

export const setDropoffBlank = () => ({
  type: SET_BLANK,
  addressType: addressType.dropoff,
});