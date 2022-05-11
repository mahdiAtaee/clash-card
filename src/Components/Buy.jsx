import React from "react";
import AddCard from "./AddCard";
import BuyFunction from "./BuyFunction";

export default function Buy({ name }) {
  return (
    <div className="badge-wrapper">
      <BuyFunction name={name} />
      <AddCard />
    </div>
  );
}
