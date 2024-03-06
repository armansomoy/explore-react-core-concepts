import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";

function App() {
  function handleClick() {
    alert("Click");
  }
  const handleClick2 = () => {
    alert("Click2");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
    <Team></Team>
      <Counter></Counter>
      <h2>React Core Concepts</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me Too</button>
      <button
        onClick={() => {
          alert("Third Click");
        }}
      >
        Click Me Too
      </button>
      <button onClick={() => addToFive(5)}>Four</button>
    </>
  );
}

export default App;
