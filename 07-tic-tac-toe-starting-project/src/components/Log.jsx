export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((currTurn) => {
        return (
          <li key={`${currTurn.square.rowIndex}${currTurn.square.colIndex}`}>
            {currTurn.player} selected {currTurn.square.rowIndex},
            {currTurn.square.colIndex}
          </li>
        );
      })}
    </ol>
  );
}
