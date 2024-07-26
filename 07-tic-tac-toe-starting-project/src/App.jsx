import GameBoard from "./coomponents/GameBoard";
import Player from "./coomponents/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="x" />
          <Player initialName="Player 2" symbol="o" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
