import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import { useState } from "react";

function App() {
  const showList = useRef(null);

  const handleFormsubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <div className="dispalyTyping">test</div>
      <form action="" className="inUseForm" onSubmit={handleFormsubmit}>
        <input type="text" placeholder="text" />
        <button>Submit</button>
      </form>
      <div className="displayList" ref={showList}></div>
    </div>
  );
}

export default App;
