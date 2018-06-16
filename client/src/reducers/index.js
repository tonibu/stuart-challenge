import { combineReducers } from 'redux';
import addressReducer from './address-reducer';
import mapReducer from './map-reducer';
import jobsReducer from './jobs-reducer';
import notificationReducer from './notification-reducer';

export default combineReducers({ 
  addresses: addressReducer,
  map: mapReducer,
  jobs: jobsReducer,
  notification: notificationReducer,
});