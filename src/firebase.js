// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDibCxXn_EsXjSIDfEsD2Dq1ZjZuiLhwtM",
  authDomain: "wheres-waldo-82629.firebaseapp.com",
  projectId: "wheres-waldo-82629",
  storageBucket: "wheres-waldo-82629.appspot.com",
  messagingSenderId: "1042527864001",
  appId: "1:1042527864001:web:9b010bf07fabab106e0040",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let charsArray = [];

const getChars = async (db) => {
  const querySnapshot = await getDocs(collection(db, "characters"));
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, doc.data());
    let char = {};
    char.name = doc.id;
    char.coords = doc.data();
    charsArray.push(char);
  });
  //   console.log(charsArray);
  return charsArray;
};

getChars(db);

const addHighScore = (user, numberSeconds, timeString) => {
  const newHighScore = doc(db, "highscores", user);
  setDoc(
    newHighScore,
    { name: user, seconds: numberSeconds, time: timeString },
    { merge: true }
  );
};

let topTen;
const getHighScores = async (db) => {
  let highScores = [];
  const querySnapshot = await getDocs(collection(db, "highscores"));
  querySnapshot.forEach((doc) => {
    let user = doc.data();
    highScores.push(user);
  });
  highScores.sort((a, b) => a.seconds - b.seconds);
  topTen = highScores.slice(0, 10);
  console.log(topTen);
  //   return highScores;
  return topTen;
};

const fetchHighScores = () => {
  getHighScores(db);
};

export { charsArray, addHighScore, fetchHighScores, topTen };
