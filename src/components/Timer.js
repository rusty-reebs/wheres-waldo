// Timer.js

import React, { useEffect } from "react";

const Timer = (props) => {
  let seconds = ("0" + (Math.floor(props.time / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(props.time / 60000) % 60)).slice(-2);

  useEffect(() => {
    let interval = null;
    if (props.timerOn) {
      interval = setInterval(() => {
        props.setTime((prevTime) => prevTime + 1000);
      }, 1000);
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

const getTimeString = (sec) => {
  let seconds = ("0" + (Math.floor(sec / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(sec / 60000) % 60)).slice(-2);
  let string = minutes + ":" + seconds;
  return string;
};

export default Timer;
export { getTimeString };
