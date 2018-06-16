import {
  CREATING_JOB,
  CREATE_JOB_SUCCESS
} from 'actions/jobs-actions';

const defaultState = {
  inProgress: false,
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case CREATING_JOB:
      return { inProgress: true };

    case CREATE_JOB_SUCCESS:
      return { inProgress: false };

    default:
      return state;
  }
};