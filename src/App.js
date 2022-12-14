import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "π": " New Yearβs Eve",
  "π¦": "Thanksgiving",
  "π": " Christmas",
  "π₯Ή": "Face Holding Back Tears",
  "π": "Smiling Face with Smiling Eyes",
  "β€οΈ": "Red Heart"
};

var emojisweKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function emogiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Emoji Dictionary</h1>
      <input onChange={emogiInputHandler} />
      <h2>{meaning}</h2>

      <h3>Emojis we know</h3>
      {emojisweKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
