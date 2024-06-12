import { Display } from "./Display";
import { useState } from "react";
export const Form = ({addRecord}) => {
    const [displayTypedText, setDisplayTypedText] = useState("");
    const handleTypedText = (e) => {
        const typed = e.target.value;
        setDisplayTypedText(typed);
      };
      const handleFormsubmit = (e) => {
        e.preventDefault();
        addRecord(displayTypedText);
      };
    return (
        <form action="" className="user-form" onSubmit={handleFormsubmit}>
        <Display displayTypedText={displayTypedText}/>
          <input
            className="user-input"
            onChange={handleTypedText}
            type="text"
            placeholder="text"
          
          />
          <button>Submit</button>
        </form>
    );
}