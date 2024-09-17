import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handelSubmit = (event) => {
    event.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="User Name"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
}
