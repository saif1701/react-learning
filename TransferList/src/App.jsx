import { useState, useEffect } from "react";
import "./App.css";
import TicTacToe from "./tictactoe/TicTacToe";
import DataTable from "./DataTable";
import AddToCart from "./AddToCart";
import Counter from "./Counter";

const itemList = [
  { id: 1, name: "Html", selected: false },
  { id: 2, name: "CSS", selected: false },
  { id: 3, name: "JS", selected: false },
  { id: 4, name: "React", selected: false },
];

function App() {
  const [left, setLeft] = useState(itemList);
  const [right, setRight] = useState([]);
  const [time, setTime] = useState();

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, [time]);

  const transferListRight = () => {
    setRight((prev) => [...prev, ...left]);
    setLeft([]);
  };

  const transferListLeft = () => {
    setLeft((prev) => [...prev, ...right]);
    setRight([]);
  };

  const handleSelect = (id, list) => {
    if (list === "left") {
      setLeft((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, selected: !item.selected } : item,
        ),
      );
    } else {
      setRight((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, selected: !item.selected } : item,
        ),
      );
    }
  };

  const transferSelectedRight = () => {
    const selectItem = left.filter((item) => item.selected);
    setRight((prev) => [...prev, ...selectItem]);
    const remainingItems = left.filter((item) => !item.selected);
    setLeft(remainingItems);
  };

  const transferSelectedLeft = () => {
    const selectItem = right.filter((item) => item.selected);
    setLeft((prev) => [...prev, ...selectItem]);
    const remainingItems = right.filter((item) => !item.selected);
    setRight(remainingItems);
  };

  const formatZero = (num) => (num < 10 ? `0${num}` : num);

  const formattedDate = () => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${formatZero(hours)}:${formatZero(minutes)}:${formatZero(seconds)} ${ampm}`;
  };

  return (
    <>
      <Counter />
      {/* <AddToCart /> */}
      {/* <DataTable /> */}
      {/* <TicTacToe />
      <div className="container">
        <div className="left">
          {left.length > 0 &&
            left.map((item) => (
              <div key={item.id}>
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleSelect(item.id, "left")}
                  name={item.name}
                  id=""
                />
                {item.name}
              </div>
            ))}
        </div>
        <div className="indicator">
          <button onClick={transferListRight} disabled={left.length == 0}>
            <span>{">>"}</span>
          </button>
          <button
            onClick={transferSelectedRight}
            disabled={!left.some((item) => item.selected)}
          >
            <span>{">"}</span>
          </button>
          <button
            onClick={transferSelectedLeft}
            disabled={!right.some((item) => item.selected)}
          >
            <span>{"<"}</span>
          </button>
          <button onClick={transferListLeft} disabled={right.length == 0}>
            <span>{"<<"}</span>
          </button>
        </div>
        <div className="right">
          {right.length > 0 &&
            right.map((item, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleSelect(item.id, "right")}
                  name={item.name}
                  id=""
                />
                {item.name}
              </div>
            ))}
        </div>
      </div> */}
    </>
  );
}

export default App;
