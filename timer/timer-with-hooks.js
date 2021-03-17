import './timer.css';
import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  }

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(()=> {
    let interval = null;
    if(isActive){
      interval = setInterval(() => {
        setSeconds(seconds => seconds +1);
      }, 1000);
    }
    else if(!isActive && seconds !== 0){
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <button onClick={toggle}
        className={`button button-primary button-primary-${isActive ? 'active': 'inactive'}`}>
          {isActive ? 'Pause': 'Start'}
        </button>
        <button onClick={reset} className="button">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
