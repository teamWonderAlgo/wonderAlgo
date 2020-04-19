// import React from 'react'
import React, { useState, useEffect }  from 'react'


/*
 - Uses Hooks to determine two things: 1) Seconds 2) On/Off
 - useEffect hook checks to see if state is true and if so starts the interval timer. It gets reset once setIsRunning(false) is used
*/

const Timer = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    if(isRunning) {
      const id = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000);
      return () => clearInterval(id)
    } return undefined;
  }, [isRunning]);

  return (
    <div>
      <h1>{seconds}</h1>
      <button onClick={() => {
        setIsRunning(true); setSeconds(0);
        }
      }>Start</button>
      <button onClick={() => {
        setIsRunning(false); setSeconds(0);
        }
      }>Reset timer</button>
    </div>
  )
}
















export default Timer;