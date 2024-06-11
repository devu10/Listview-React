
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const handleOnChange = (e) => {
    const { value } = e.target; //destructurng the value because value is the property of target
    setName(value);
  };
  return (
    <div
      className="wrapper"
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
      }}
    >
      <div
        className="userList"
        style={{ boxShadow: "0 0 10px grey", padding: "2rem" }}
      >
        <div className="display">{name}</div>

        <div className="form">
          <form action="">
            <input type="text" onChange={handleOnChange} />
            <button>Add</button>
          </form>
        </div>
        <div className="list">
          <ul>
            <li>one</li>
            <li>two</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
