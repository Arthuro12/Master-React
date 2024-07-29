import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ activePlayerSymbol, onSelectSquare }) {
  const [gameBoard, setGameBoardVal] = useState(initialGameBoard);

  function handleSquareSelected(rowIndex, symbolIndex) {
    setGameBoardVal((prevGameBoard) => {
      const updatedGameBoard = [
        ...prevGameBoard.map((currBoard) => [...currBoard]),
      ];
      updatedGameBoard[rowIndex][symbolIndex] = activePlayerSymbol;
      return updatedGameBoard;
    });

    onSelectSquare();
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
