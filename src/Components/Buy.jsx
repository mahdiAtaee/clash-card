import React, { useState, useEffect } from "react";
import AddCard from "./AddCard";
import BuyFunction from "./BuyFunction";
import Max from "./Max";

export default function Buy({ name, id }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchMax = setInterval(() => {
      fetch(`http://localhost:3001/restricts?hero_id=${id}`)
        .then((response) => response.json())
        .then((restrict) => {
          setCount(restrict[0].max);
        });
    }, 2000);

    return () => clearInterval(fetchMax);
  }, [id]);

  return (
    <div className="badge-wrapper">
      <BuyFunction name={name} />
      <div>
        <Max max={count} />
        <AddCard />
      </div>
    </div>
  );
}
