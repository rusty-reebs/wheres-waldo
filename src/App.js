// App.js

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";
import Message from "./components/Message";
import { getTimeString } from "./components/Timer";
import { charsArray, addHighScore } from "./firebase";

console.log(charsArray);

const gameImage = require("./img/waldo-1.jpeg");
// const imageWaldo = require("./img/waldo-1.png");
// const imageWenda = require("./img/wenda-1.png");
// const imageWizard = require("./img/wizard-1.png");
// const imageOdlaw = require("./img/odlaw-1.png");

const charState = [
  {
    name: "Waldo",
    found: false,
    // image2: imageWaldo,
    image: "/img/waldo-1.png",
  },
  {
    name: "Wenda",
    found: false,
    // image2: imageWenda,
    image: "/img/wenda-1.png",
  },
  {
    name: "Wizard",
    found: false,
    // image2: imageWizard,
    image: "/img/wizard-1.png",
  },
  {
    name: "Odlaw",
    found: false,
    // image2: imageOdlaw,
    image: "/img/odlaw-1.png",
  },
];

let gameDimensions;

const App = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [characterState, setCharacterState] = useState(charState);
  const [userCoords, setUserCoords] = useState([]);
  const [toggleMessageBox, setToggleMessageBox] = useState(false);
  const [message, setMessage] = useState("");
  const [toggleInput, setToggleInput] = useState(false);
  const [timerOn, setTimerOn] = useState(false);
  const [time, setTime] = useState(0);
  const [userName, setUserName] = useState("");

  const gameStart = () => {
    handleMessage("Find the characters!");
    setToggleMessageBox(true);
    setTimeout(() => {
      setToggleMessageBox(false);
    }, 2000);
  };

  const gameEnd = () => {
    setTimerOn(false);
    handleMessage("Nice work! A new high score!");
    setToggleMessageBox(true);
    setToggleInput(true);
    // load high scoresheet
  };

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHighScore(userName, time / 1000, getTimeString(time));
    setUserName("");
    setToggleInput(false);
    setToggleMessageBox(false);
    // load high scoresheet
  };

  useEffect(() => {
    gameStart();
    setTimeout(() => {
      setTimerOn(true);
    }, 1500);
  }, []);

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const handleFound = (name) => {
    setCharacterState((state) => {
      const characters = state.map((char) => {
        if (char.name === name) {
          char.found = true;
          return char;
        } else {
          return char;
        }
      });
      return characters;
    });
    if (characterState.every((char) => char.found === true)) {
      console.log("game over");
      gameEnd();
    }
  };

  const handleClick = (e) => {
    if (timerOn) {
      gameDimensions = e.target.getBoundingClientRect();
      let x = e.clientX - gameDimensions.left; //x position within the element.
      let y = e.clientY - gameDimensions.top; //y position within the element.
      console.log("Left? : " + x + " ; Top? : " + y + ".");
      setUserCoords([x, y]);
      toggleDropdown ? setToggleDropdown(false) : setToggleDropdown(true);
    } else return;
  };

  return (
    <div className="App">
      <Header
        characterState={characterState}
        timerOn={timerOn}
        time={time}
        setTime={setTime}
      />
      <img src={gameImage.default} alt="Not found" onClick={handleClick} />
      {toggleDropdown && (
        <Dropdown
          characterState={characterState}
          toggleDropdown={toggleDropdown}
          setToggleDropdown={setToggleDropdown}
          userCoords={userCoords}
          charLocations={charsArray}
          gameDimensions={gameDimensions}
          toggleMessageBox={toggleMessageBox}
          setToggleMessageBox={setToggleMessageBox}
          handleMessage={handleMessage}
          handleFound={handleFound}
        />
      )}
      {toggleMessageBox && (
        <Message
          message={message}
          toggleInput={toggleInput}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          userName={userName}
        />
      )}
    </div>
  );
};

export default App;
