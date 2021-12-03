// Highscores.js

import React, { useEffect } from "react";

const Highscores = (props) => {
  return (
    <div className="Message-container">
      <div className="Message-box">
        <h2>High Scores</h2>
        <div className="Highscores">
          {props.topTen.map((user, index) => (
            <div key={user.name} className="Highscores-user">
              <h3>{index + 1}</h3>
              <h3>{user.name}</h3>
              <h3>{user.time}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highscores;
