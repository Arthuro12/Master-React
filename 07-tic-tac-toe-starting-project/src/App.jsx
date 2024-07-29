import { useState } from "react";

import GameBoard from "./coomponents/GameBoard";
import Player from "./coomponents/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="x"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="o"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          activePlayerSymbol={activePlayer}
          onSelectSquare={handleSelectSquare}
        />
      </div>
    </main>
  );
}

export default App;
