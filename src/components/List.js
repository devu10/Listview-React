import React from "react";

export const List = ({ list }) => {
  return (
    <div className="list">
      <ul>
        {list.map((itm, index) => (
          <li key={index}>{itm}</li>
        ))}
      </ul>
    </div>
  );
};
