import React, { useState, useEffect } from 'react';
import './Clock.css'
import Logo from '../assets/images/logo.png';


function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  return (
    <div className="clock">
      <img src={Logo} alt='Dashboard SAPP' className='img-fluid' style={{ width: '50px', height: '50px' }} />
      <div className="time-info">
        <h4>{formatTime(currentTime)}            {formatDate(currentTime)}</h4>
      </div>
      <hr className='d-none d-sm-inline'></hr>
    </div>
  );
}

export default Clock;
