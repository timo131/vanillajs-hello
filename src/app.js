/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateExcuse() {
    let subject = ["My dog", "My mother-in-law", "A pidgeon", "The boogieman"];
    let action = ["pooped on", "pissed on", "crushed", "broke", "stole", "ate"];
    let object = ["my face", "my car", "my dignity", "my underwear"];
    let when = [
      "before class.",
      "this morning.",
      "last night.",
      "in the middle of the night.",
      "on the way to school."
    ];
    let subjectIndex = Math.floor(Math.random() * subject.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let objectIndex = Math.floor(Math.random() * object.length);
    let whenIndex = Math.floor(Math.random() * when.length);
    return (
      subject[subjectIndex] +
      " " +
      action[actionIndex] +
      " " +
      object[objectIndex] +
      " " +
      when[whenIndex]
    );
  }
  let excuseText = generateExcuse();
  document.querySelector("#excuse").innerHTML = excuseText;
  console.log("Excuse:", excuseText);
};
