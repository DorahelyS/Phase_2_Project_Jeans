import React, { useState } from "react";

function JeanCard({jean}) {
  const [isInStock, setIsInStock] = useState(true)

  const updateStockBtn = () => {
    setIsInStock(!isInStock)
  }

  return (
    <ul className="card">
      <img src={jean.image} alt={jean.name} />
      <h4>{jean.name}</h4>
      <p>Price: {jean.price}</p>
      <button className={`primary ${isInStock ? "active" : ""}`}
      onClick={updateStockBtn}>
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>
    </ul>
  );
}

export default JeanCard;
