import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className={`h-[100vh] bg-black w-full`}>
      <div className="w-full flex flex-wrap justify-evenly h-[20%] p-6 rounded-[2rem] bg-gray-400">
        <Button
          text="Red"
          color={color}
          onclick={() => {
            setColor("red");
          }}
        />
      </div>
    </div>
  );
}

export default App;
