// App.js

import React, { useState } from "react";
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";
// import getCharCoords from "./firebase";
import charsArray from "./firebase";

// const charCoords = getCharCoords();
// console.log(charCoords); // object with character coords
console.log(charsArray);

const gameImage = require("./img/waldo-1.jpeg");

const characterState = [
  {
    name: "Waldo",
    found: false,
  },
  {
    name: "Wenda",
    found: false,
  },
  {
    name: "Wizard",
    found: false,
  },
  {
    name: "Odlaw",
    found: false,
  },
];

// leave cursor as crosshair, but put a circle around character when clicked
let rect;

const App = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [dropdownX, setDropdownX] = useState(0);
  const [dropdownY, setDropdownY] = useState(0);
  const [charState, setCharState] = useState(characterState);
  // const [rect, setRect] = useState({});
  const [userCoords, setUserCoords] = useState([]);

  // const main = document.getElementById("main");

  // useEffect(() => {
  //   console.log(main);
  //   console.log(main.getBoundingClientRect());
  // });

  // let userCoords = [];

  const handleClick = (e) => {
    // userCoords = [];
    // console.log("click! clientX", "x", e.clientX, "y", e.clientY);
    // console.log("click! pageX", "x", e.pageX, "y", e.pageY);
    rect = e.target.getBoundingClientRect();
    // console.log("rect facts", rect);
    let x = e.clientX - rect.left; //x position within the element.
    let y = e.clientY - rect.top; //y position within the element.
    console.log("Left? : " + x + " ; Top? : " + y + ".");
    // userCoords.push(x);
    // userCoords.push(y);
    setUserCoords([x, y]);
    // console.log("userCoords", userCoords);
    // call Dropdown
    setDropdownX(e.pageX);
    setDropdownY(e.pageY);
    toggleDropdown ? setToggleDropdown(false) : setToggleDropdown(true);
  };

  return (
    <div className="App">
      <Header charState={charState} />
      <img
        id={"main"}
        src={gameImage.default}
        alt="Not found"
        onClick={handleClick}
      />
      <Dropdown
        charState={charState}
        toggleDropdown={toggleDropdown}
        left={dropdownX}
        top={dropdownY}
        userCoords={userCoords}
        charLocations={charsArray}
        rect={rect}
      />
    </div>
  );
};

export default App;
