import { useRef, useState } from "react";

export default function Player({}) {
  const inputPlayerName = useRef(null);
  const [playerName, setPlayerName] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  function updatePlayerName(event) {
    // setSubmitted(false);
    setPlayerName(event.target.value);
  }

  function setName() {
    // setSubmitted((oldValue) => !oldValue);
    setPlayerName(inputPlayerName.current.value);
    inputPlayerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "Unknown user"}</h2>
      <p>
        {/* <input type="text" onChange={updatePlayerName} value={playerName} /> */}
        <input ref={inputPlayerName} type="text" />
        <button type="button" onClick={setName}>
          Set Name
        </button>
      </p>
    </section>
  );
}
