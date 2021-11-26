// App.js

import React, { useState } from "react";
import Header from "./components/Header";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
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
console.log(app);
const db = getFirestore(app);
console.log(db);

const tester = async (db) => {
  const myCollection = collection(db, "characters");
  const charSnapshot = await getDocs(myCollection);
  const charList = charSnapshot.docs.map((doc) => doc.data());
  return charList;
};
console.log(tester(db));

const gameImage = require("./img/waldo-1.jpeg");

const App = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  const handleClick = (e) => {
    console.log("click! clientX", "x", e.clientX, "y", e.clientY);
    console.log("click! pageX", "x", e.pageX, "y", e.pageY);
    console.log("click! layerX", "x", e.layerX, "y", e.layerY);
    // call Dropdown
    setClientX(e.pageX);
    setClientY(e.pageY);
    setToggleDropdown(true);
  };

  return (
    <div className="App">
      <Header />
      <img
        id={"main"}
        src={gameImage.default}
        alt="Not found"
        onClick={handleClick}
      />
      <Dropdown toggleDropdown={toggleDropdown} left={clientX} top={clientY} />
    </div>
  );
};

export default App;
