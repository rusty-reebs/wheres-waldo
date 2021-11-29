// Header.js

import React from "react";

const Header = (props) => {
  const characterState = props.characterState;

  const charOpacity = {};
  charOpacity["--char-opacity"] = 1;

  return (
    <div className="Header">
      <div className="Header-title">
        <h1>Where's Waldo?</h1>
        <p>A project coded with React and Firebase</p>
      </div>
      <h3>Left to find:</h3>
      {/* check found state, if true, then change opacity */}
      {characterState.map((char) => (
        <div key={char.name} className="Header-char" style={charOpacity}>
          <p>{char.name}</p>
          <img src={char.image.default} alt={char.name} />
        </div>
      ))}
      <h1>Time: 0:00</h1>
    </div>
  );
};

export default Header;
