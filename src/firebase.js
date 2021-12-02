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

export { charsArray, addHighScore };
