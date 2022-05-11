import React from "react";

export default function BuyFunction({ name }) {
  function showAlert(char) {
    alert(char);
  }

  function handleClick() {
    setTimeout(() => {
      showAlert(name);
    }, 2000);
  }

  return (
    <div>
      <span className="badge" onClick={handleClick}>
        Buy
      </span>
    </div>
  );
}
