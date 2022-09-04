import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😈": "Smiling Face With Horns",
  "🖖": "Vulcan Salute",
  "🤑": "Money-Mouth Face",
  "🔥": "Fire",
  "🌟": "Glowing Star",
  "🐘": "Elephant",
  "🤖": "Robot Face",
  "🦍": "Gorilla",
  "🌞": "Sun with Face",
  "😂": "Face with Tears of Joy",
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "📕": "book",
  "🖥️": "monitor",
  "👍": "thumbs-up",
  "😘": "kiss",
  "🤐": "shut-up",
  "👿": "angry",
};
const emojiArray = Object.keys(emojiDictionary);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function emojiClickHandler(emoji) {
    if (emoji in emojiDictionary) {
      setEmojiMeaning(emojiDictionary[emoji]);
    }
  }

  function emojiInputHandler(event) {
    const input = event.target.value;

    if (input in emojiDictionary) {
      setEmojiMeaning(emojiDictionary[input]);
    } else {
      setEmojiMeaning("Unknown Emoji");
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="hero-head">Emoji Interpreter</h1>
        <div className="emoji-interpreter">
          <input
            onChange={emojiInputHandler}
            className="emoji-input"
            placeholder="Enter emoji to know it's meaning!"
          />
          <div>
            <h2 className="emoji-meaning">{emojiMeaning}</h2>
          </div>
        </div>
        <div className="known-emojis">
          <h2>Emojis In Our Database</h2>
          <div className="known-emojis-list">
            {emojiArray.map((emoji) => {
              return (
                emoji !== "" && (
                  <div className="emoji-wrapper">
                    <span
                      onClick={() => emojiClickHandler(emoji)}
                      className="emojis"
                      key={emoji}
                    >
                      {emoji}
                    </span>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
