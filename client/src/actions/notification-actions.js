export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION';

export const showNotification = () => (dispatch) => {
  dispatch({
    type: SHOW_NOTIFICATION,
  });

  setTimeout(() => dispatch(closeNotification()), 5000);
};

export const closeNotification = () => ({
  type: CLOSE_NOTIFICATION,
});