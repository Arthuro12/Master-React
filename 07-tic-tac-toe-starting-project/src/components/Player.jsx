import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setEditing] = useState(false);

  function handleEditClick() {
    setEditing((edit) => !edit);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChangeName(event) {
    setPlayerName(event.target.value);
  }

  let elemPlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    elemPlayerName = (
      <input
        type="text"
        placeholder={playerName}
        value={playerName}
        required
        onChange={handleChangeName}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {elemPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
