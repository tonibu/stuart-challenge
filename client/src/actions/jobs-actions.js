export const CREATE_JOB = 'CREATE_JOB';
export const CREATING_JOB = 'CREATING_JOB';
export const CREATE_JOB_SUCCESS = 'CREATE_JOB_SUCCESS';

export const createJob = (pickup, dropoff) => (dispatch) => {
  const action = {
    type: CREATE_JOB,
    fetchConfig: {
      path: 'http://localhost:4000/jobs',
      body: {
        pickup,
        dropoff,
      },
    },
  };

  dispatch({ type: CREATING_JOB });

  return dispatch(action)
    .then(() => dispatch(createJobSuccess()));
};

export const createJobSuccess = () => ({
  type: CREATE_JOB_SUCCESS,
});