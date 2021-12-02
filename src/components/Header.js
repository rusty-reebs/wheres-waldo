// Header.js

import React from "react";
import Timer from "./Timer";

const Header = (props) => {
  const characterState = props.characterState;

  return (
    <div className="Header">
      <div className="Header-title">
        <div>
          <h1>
            <span style={{ color: "red" }}>Where's </span>
            <span style={{ color: "#1da1f2" }}>Waldo?</span>
          </h1>
        </div>
        <p>A project coded with React and Firebase</p>
      </div>
      <h3>Left to find:</h3>
      {characterState.map((char) => (
        <div
          key={char.name}
          className="Header-char"
          style={char.found ? { opacity: 0.2 } : { opacity: 1 }}
        >
          <p>{char.name}</p>
          <img src={char.image} alt={char.name} />
        </div>
      ))}
      <Timer timerOn={props.timerOn} />
    </div>
  );
};

export default Header;
