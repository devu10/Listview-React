import React, { useState } from "react";
import { Display } from "./Display";

export const Form = ({ adduser }) => {
  const [name, setName] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target; //destructurng the value because value is the property of target
    setName(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // setList([...list, name]);
    adduser(name);
  };
  return (
    <div className="form">
      <Display name={name} />
      <form action="" onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleOnChange} />
        <button>Add</button>
      </form>
    </div>
  );
};
