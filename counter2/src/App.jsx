import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  const addValue = (event) => {
    counter = counter + 1;
    counter >= 20
      ? (event.target.disabled = true)
      : (event.target.disabled = false);

    setCounter(counter);
  };

  const decreaseValue = (event) => {
    counter = counter - 1;
    counter <= 0
      ? (event.target.disabled = true)
      : (event.target.disabled = false);
    setCounter(counter);
  };
  return (
    <>
      <h1>Abinash Counter</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>remover value</button>
    </>
  );
}

export default App;
