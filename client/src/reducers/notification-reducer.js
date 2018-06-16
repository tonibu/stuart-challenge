import { CLOSE_NOTIFICATION, SHOW_NOTIFICATION } from 'actions/notification-actions';

const defaultState = {
  show: false,
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case CLOSE_NOTIFICATION:
      return { show: false };

    case SHOW_NOTIFICATION:
      return { show: true };

    default:
      return state;
  }
};