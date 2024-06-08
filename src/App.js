import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import { useState } from "react";

function App() {
  const listRef = useRef(null);
  const [displayList, setDisplayList] = useState("");
  const [displayTypedText, setDisplayTypedText] = useState("");

  const handleFormsubmit = (e) => {
    e.preventDefault();
    setDisplayList(listRef.current.value);
  };

  const handleTypedText = (e) => {
    setDisplayTypedText(e.target.value);
  };
  return (
    <div className="App">
      <div className="dispaly-typing">{displayTypedText}</div>
      <form action="" className="user-form" onSubmit={handleFormsubmit}>
        <input
          className="user-input"
          onChange={handleTypedText}
          type="text"
          placeholder="text"
          ref={listRef}
        />
        <button>Submit</button>
      </form>
      <div className="display-list">{displayList}</div>
    </div>
  );
}

export default App;
