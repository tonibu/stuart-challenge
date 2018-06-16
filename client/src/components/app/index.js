import React from 'react';
import Map from 'components/map';
import JobsForm from 'components/jobs-form';
import Notification from 'components/notification';
import './styles.css';

const App = () => (
  <div className="App">
    <div className='map-container'>
      <div className='form-container'>
        <JobsForm />
      </div>
      <Notification />
      <Map />
    </div>
  </div>
);

export default App;
