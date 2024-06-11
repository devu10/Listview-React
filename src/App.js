import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import { useState } from "react";

function App() {
  //let lists = [];
  const listRef = useRef(null);
  const [displayList, setDisplayList] = useState([]);
  const [displayTypedText, setDisplayTypedText] = useState("");

  const handleFormsubmit = (e) => {
    e.preventDefault();
    //lists.push(listRef.current.value);
   // console.log(lis)
    setDisplayList((prevList)=>[...prevList, listRef.current.value]);
    //listRef.current.value = "";
  };

  const handleTypedText = (e) => {
    setDisplayTypedText(e.target.value);
  };
  return (
    <div className="App d-flex flex-column justify-content-center align-items-center" style={{minHeight:"90vh"}}>
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
      <div className="display-list">{displayList.map((itm, ind)=>( <div key={ind}>{itm}</div>)
      )}</div>
    </div>
  );
}

export default App;
