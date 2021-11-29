// App.js

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";
import charsArray from "./firebase";

console.log(charsArray);

const gameImage = require("./img/waldo-1.jpeg");
const imageWaldo = require("./img/waldo-1.png");
const imageWenda = require("./img/wenda-1.png");
const imageWizard = require("./img/wizard-1.png");
const imageOdlaw = require("./img/odlaw-1.png");

const charState = [
  {
    name: "Waldo",
    found: false,
    image: imageWaldo,
  },
  {
    name: "Wenda",
    found: false,
    image: imageWenda,
  },
  {
    name: "Wizard",
    found: false,
    image: imageWizard,
  },
  {
    name: "Odlaw",
    found: false,
    image: imageOdlaw,
  },
];

let gameSize;

const App = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [characterState, setCharacterState] = useState(charState);
  const [userCoords, setUserCoords] = useState([]);

  const handleClick = (e) => {
    gameSize = e.target.getBoundingClientRect();
    let x = e.clientX - gameSize.left; //x position within the element.
    let y = e.clientY - gameSize.top; //y position within the element.
    console.log("Left? : " + x + " ; Top? : " + y + ".");
    setUserCoords([x, y]);
    toggleDropdown ? setToggleDropdown(false) : setToggleDropdown(true);
  };

  return (
    <div className="App">
      <Header characterState={characterState} />
      <img src={gameImage.default} alt="Not found" onClick={handleClick} />
      {toggleDropdown && (
        <Dropdown
          characterState={characterState}
          toggleDropdown={toggleDropdown}
          userCoords={userCoords}
          charLocations={charsArray}
          gameSize={gameSize}
        />
      )}
    </div>
  );
};

export default App;
