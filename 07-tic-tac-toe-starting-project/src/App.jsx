function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player-name">Player 1</span>
            <span className="player-symbol">x</span>
          </li>
          <li>
            <span className="player-name">Player 2</span>
            <span className="player-symbol">o</span>
          </li>
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
