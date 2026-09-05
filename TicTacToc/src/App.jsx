import { useState } from "react";
import "./App.css";

const winningPatterns = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row

  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column

  [0, 4, 8], // diagonal
  [2, 4, 6], // diagonal
];

function App() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [winner, setWinner] = useState(null);

  const [current, setCurrent] = useState("X");

  const handleCLick = (index) => {
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = current;
    setBoard(newBoard);
    let result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
      // setBoard(Array(9).fill(null));
      return;
    }
    setCurrent(current === "X" ? "O" : "X");
  };

  const checkWinner = (board) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(board[a]);
        return board[a];
      }
    }
    return null;
  };

  return (
    <>
      <section className="board">
        {board.map((cell, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => handleCLick(index)}
          >
            {cell}
          </button>
        ))}
      </section>

      {winner && <div className="ticks">Winners is {winner}</div>}
    </>
  );
}

export default App;
