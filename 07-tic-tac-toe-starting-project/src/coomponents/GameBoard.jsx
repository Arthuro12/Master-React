import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoardVal] = useState(initialGameBoard);

  function handleSquareSelected(rowIndex, symbolIndex) {
    gameBoard = setGameBoardVal((prevGameBoard) => {
      const updatedGameBoard = [
        ...prevGameBoard.map((currBoard) => [...currBoard]),
      ];
      updatedGameBoard[rowIndex][symbolIndex] = "X";
      return updatedGameBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, symbolIndex) => (
              <li key={symbolIndex}>
                <button
                  onClick={() => handleSquareSelected(rowIndex, symbolIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
