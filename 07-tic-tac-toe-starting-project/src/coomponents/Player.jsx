import { useState } from "react";

export function Player({ name, symbol }) {
  const [isEditing, setEditing] = useState(false);

  function handleEditClick() {
    setEditing(!isEditing);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" placeholder={name} required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
