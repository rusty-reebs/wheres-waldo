// App.js

import React, { useState } from "react";
import Header from "./components/Header";
import { initializeApp } from "firebase/app";
import Dropdown from "./components/Dropdown";

const firebaseConfig = {
  apiKey: "AIzaSyDibCxXn_EsXjSIDfEsD2Dq1ZjZuiLhwtM",
  authDomain: "wheres-waldo-82629.firebaseapp.com",
  projectId: "wheres-waldo-82629",
  storageBucket: "wheres-waldo-82629.appspot.com",
  messagingSenderId: "1042527864001",
  appId: "1:1042527864001:web:9b010bf07fabab106e0040",
};

const app = initializeApp(firebaseConfig);

const gameImage = require("./img/waldo-1.jpeg");

const App = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  const handleClick = (e) => {
    console.log("click!", "x", e.clientX, "y", e.clientY);
    // call Dropdown
    setClientX(e.clientX);
    setClientY(e.clientY);
    setToggleDropdown(true);
  };

  return (
    <div className="App">
      <Header />
      <img src={gameImage.default} alt="Not found" onClick={handleClick} />
      <Dropdown toggleDropdown={toggleDropdown} left={clientX} top={clientY} />
    </div>
  );
};

export default App;
