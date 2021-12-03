// App.js

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";
import Message from "./components/Message";
import Highscores from "./components/Highscores";
import { getTimeString } from "./components/Timer";
import { db, charsArray, addHighScore } from "./firebase";
import { getDocs, collection } from "@firebase/firestore";

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
  const [showHighScores, setShowHighScores] = useState(false);
  const [topScores, setTopScores] = useState([]);
  const [toggleResetGame, setToggleResetGame] = useState(false);

  const gameStart = () => {
    handleMessage("Find the characters!");
    setToggleMessageBox(true);
    setTimeout(() => {
      setToggleMessageBox(false);
    }, 2000);
  };

  const gameEnd = () => {
    setTimerOn(false);
    let existingScores = topScores.filter((user) => {
      if (user.seconds) {
        return user;
      } else return false;
    });
    if (time / 1000 < existingScores[existingScores.length - 1].seconds) {
      handleMessage("Nice work! A new high score!");
      setToggleMessageBox(true);
      setToggleInput(true);
    } else {
      setShowHighScores(true);
    }
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
    handleMessage("");
    setShowHighScores(true);
    //! handleCleanDatabase
  };

  const handleTopScores = (scores) => {
    setTopScores(scores);
  };

  const getHighScores = async (db) => {
    let highScores = [];
    const querySnapshot = await getDocs(collection(db, "highscores"));
    querySnapshot.forEach((doc) => {
      let user = doc.data();
      highScores.push(user);
    });
    highScores.sort((a, b) => a.seconds - b.seconds);
    let topTen;
    topTen = highScores.slice(0, 10);
    console.log(topTen);
    handleTopScores(topTen);
  };

  useEffect(() => {
    getHighScores(db);
    setShowHighScores(false);
    setToggleMessageBox(false);
    setCharacterState((state) => {
      const characters = state.map((char) => {
        char.found = false;
        return char;
      });
      return characters;
    });
    console.log(charState);
    setTime(0);
    gameStart();
    setTimeout(() => {
      setTimerOn(true);
    }, 1500);
  }, [toggleResetGame]);

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
      gameEnd();
    }
  };

  const handleClick = (e) => {
    if (timerOn) {
      gameDimensions = e.target.getBoundingClientRect();
      let x = e.clientX - gameDimensions.left; //x position within the element.
      let y = e.clientY - gameDimensions.top; //y position within the element.
      setUserCoords([x, y]);
      toggleDropdown ? setToggleDropdown(false) : setToggleDropdown(true);
    } else return;
  };

  const handleResetGame = () => {
    setToggleResetGame((previous) => !previous);
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
      {showHighScores && (
        <Highscores
          getHighScores={getHighScores}
          topScores={topScores}
          handleTopScores={handleTopScores}
          handleResetGame={handleResetGame}
        />
      )}
    </div>
  );
};

export default App;
