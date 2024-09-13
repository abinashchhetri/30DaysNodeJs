import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [lenght, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += `!@#$%^&*()-_=+[]{}|;:'",.<>?/\\`;

    for (let i = 0; i < lenght; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [lenght, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [lenght, numberAllowed, charAllowed]);

  return (
    <div>
      <div className="w-full max-w-md mx-auto text-center gap-3 shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 flex flex-col">
        <h1>Password Generator</h1>

        <div className="flex gap-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full rounded-lg py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
            className="bg-orange-500 px-5 rounded-lg text-gray-700 font-semibold"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="felx items-center gap-x-1">
            <input
              min={6}
              max={100}
              value={lenght}
              type="range"
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {lenght}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              defaultChecked={numberAllowed}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              defaultChecked={charAllowed}
            />
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
