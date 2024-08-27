import { useRef, useState } from "react";

export default function Player({}) {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function updatePlayerName(event) {
    setSubmitted(false);
    setPlayerName(event.target.value);
  }

  function setName() {
    setSubmitted((oldValue) => !oldValue);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : "Unknown user"}</h2>
      <p>
        <input type="text" onChange={updatePlayerName} value={playerName} />
        <button type="button" onClick={setName}>
          Set Name
        </button>
      </p>
    </section>
  );
}
