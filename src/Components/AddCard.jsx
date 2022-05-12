import React, { useState, useEffect } from "react";

export default function AddCard() {
  const [count, setCount] = useState(0);

  function Increment() {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);
  }

  function Decrement() {
    setTimeout(() => {
      setCount((prevCount) => prevCount - 1);
    }, 2000);
  }

  // useEffect(() => {
  //   console.log("Effect");
  // });

  return (
    <div className="wrapper-count">
      <button className="plus" onClick={Increment}>
        +
      </button>
      <span className="Number">{count}</span>
      <button className="minus" onClick={Decrement}>
        -
      </button>
    </div>
  );
}
