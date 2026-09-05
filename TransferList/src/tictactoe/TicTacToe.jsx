import { useState } from "react";
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
const TicTacToe = () => {
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
  const [current, setCurrent] = useState("X");
  const [winner, setWinner] = useState(null);
  const handleClick = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = current;
    setBoard(newBoard);

    const result = checkWinner(newBoard);

    if (result) {
      setWinner(result);
      setTimeout(() => {
        setBoard(Array(9).fill(null));
        setWinner(null);
        setCurrent("X");
      }, 1500);
      return;
    }
    if (newBoard.every((cell) => cell !== null)) {
      setWinner("Draw");
      return;
    }
    setCurrent(current === "X" ? "O" : "X");
  };
  const checkWinner = (board) => {
    for (const pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(board[a]);
        return board[a];
      }
    }
    return null;
  };
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
  };
  return (
    <>
      <div className="board">
        {board.map((cell, index) => (
          <button
            className="cell"
            key={index}
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>
      {winner && (
        <>
          <h2>{winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`}</h2>

          <button onClick={resetGame}>New Game</button>
        </>
      )}
    </>
  );
};

export default TicTacToe;
