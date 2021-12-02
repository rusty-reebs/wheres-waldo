// Timer.js

import React, { useEffect, useState } from "react";

const Timer = (props) => {
  const [time, setTime] = useState(0);

  let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);

  useEffect(() => {
    let interval = null;
    if (props.timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!props.timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [props.timerOn]);

  return (
    <div className="Timer">
      <div className="Timer-name">
        <h1>Time:&nbsp;</h1>
      </div>
      <div className="Timer-minutes">
        <h1>{minutes}</h1>
      </div>
      <div className="Timer-separator">
        <h1>:</h1>
      </div>
      <div className="Timer-seconds">
        <h1>{seconds}</h1>
      </div>
    </div>
  );
};

export default Timer;
