import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import { useState } from "react";
import { Display } from "./components/Display";
import { Form } from "./components/Form";
import { UserList } from "./components/UserList";

function App() {

  const [displayList, setDisplayList] = useState([]);
  

 

  const addRecord = (displayTypedText)=> {
    setDisplayList([...displayList, displayTypedText]);
  }

  
  return (
    <div className="wrapper d-flex justify-content-center align-items-center " style={{minHeight:"100vh"}}>
      <div className="listusr shadow-lg p-2" >
      
    <Form addRecord={addRecord}/>
      <UserList displayList={displayList}/>
      </div>
    </div>
  );
}

export default App;
