// App.js

import { initializeApp } from "firebase/app";

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
  return (
    <div className="App">
      <img src={gameImage.default} alt="Not found" />
    </div>
  );
};

export default App;
