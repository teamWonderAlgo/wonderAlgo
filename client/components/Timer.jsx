// import React from 'react'
import React, { useState, useEffect } from 'react';

/*
 - Uses Hooks to determine two things: 1) Seconds 2) On/Off
 - useEffect hook checks to see if state is true and if so starts the interval timer. It gets reset once setIsRunning(false) is used to set isRunning. This will stop the setInterval function.
*/

const Timer = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      return () => clearInterval(id);
    }
    return undefined;
  }, [isRunning]);

  console.log('timer');
  return (
    <div>
      <h1 className='timer'>{seconds}</h1>
    </div>
  );
};

export default Timer;
