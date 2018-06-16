import React from 'react';
import { connect } from 'react-redux';
import { closeNotification } from 'actions/notification-actions';
import './styles.css';

const Notification = (props) => {
  
  if (props.showNotification) {
    return (
      <div
        className='job-notification'
        onClick={props.closeNotification}>
        Job has been created successfully!
      </div>
    );
  }

  return null;
};

const mapStateToProps = ({ notification }) => ({
  showNotification: notification.show,
});

const mapDispatchToProps = (dispatch) => ({
  closeNotification: () => dispatch(closeNotification())
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
