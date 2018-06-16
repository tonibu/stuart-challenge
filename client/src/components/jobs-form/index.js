import React from 'react';
import { connect } from 'react-redux';
import { 
  checkPickupAddress,
  checkDropoffAddress,
  setPickupBlank,
  setDropoffBlank
} from 'actions/address-actions';
import { createJob } from 'actions/jobs-actions';
import { showNotification } from 'actions/notification-actions';
import debounce from 'lodash/debounce';
import classNames from 'classnames';
import './styles.css';

const JobsForm = (props) => (
  <div className='jobs-form'>
    <form onSubmit={e => props.submitForm(e, props)}>
      <div className='jobs-form__row'>
        <img src={props.pickupImage} className='jobs-form__icon' />
        <input
          type='text'
          className='jobs-form__input'
          placeholder='Pick up address'
          value={props.pickup.values}
          onKeyDown={props.handlePickupInputOnKeyDown}
          onBlur={props.handlePickupInputBlur} />
      </div>
      <div className='jobs-form__row'>
        <img src={props.dropoffImage} className='jobs-form__icon' />
        <input
          type='text'
          className='jobs-form__input'
          placeholder='Drop off address'
          value={props.dropoff.values}
          onKeyDown={props.handleDropoffInputOnKeyDown}
          onBlur={props.handleDropoffInputBlur} />
      </div>
      <button
        type='submit'
        className={classNames({
          'jobs-form__submit': true,
          'jobs-form__submit-inactive': props.submitDisabled
        })}>
        {props.jobInProgress ? 'Creating...' : 'Create Job'}
      </button>
    </form>
  </div>
);

const mapStateToProps = state => {
  const { pickup, dropoff } = state.addresses;
  const { jobs } = state;
  const pickupImage = require(`images/pickup_${pickup.state}.svg`);
  const dropoffImage = require(`images/dropoff_${dropoff.state}.svg`);
  const submitDisabled = pickup.state !== 'success' || dropoff.state !== 'success' || jobs.inProgress;

  return {
    pickupImage,
    dropoffImage,
    submitDisabled,
    pickup,
    dropoff,
    jobInProgress: jobs.inProgress,
  }
};

const mapDispatchToProps = (dispatch) => {
  const dispatchFunction = (checkAddress, setBlank) => (target) => {
    const address = target && target.value;
    address ? dispatch(checkAddress(address)) : dispatch(setBlank());
  };

  const debouncedPickupDispatch = debounce(dispatchFunction(checkPickupAddress, setPickupBlank), 1000);
  const deboundesDropoffDispatch = debounce(dispatchFunction(checkDropoffAddress, setDropoffBlank), 1000);

  return {
    handlePickupInputBlur: (e) => dispatchFunction(checkPickupAddress, setPickupBlank)(e.currentTarget),
    handleDropoffInputBlur: (e) => dispatchFunction(checkDropoffAddress, setDropoffBlank)(e.currentTarget),
    handlePickupInputOnKeyDown: (e) => debouncedPickupDispatch(e.currentTarget),
    handleDropoffInputOnKeyDown: (e) => deboundesDropoffDispatch(e.currentTarget),
    submitForm: (e, props) => {
      e.preventDefault();
      const form = e.currentTarget;

      dispatch(createJob(props.pickup.address, props.dropoff.address))
        .then(() => {
          form.reset();
          dispatch(showNotification());
        });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobsForm);
