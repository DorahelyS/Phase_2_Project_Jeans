import React, { useState } from "react";

function JeanCard({jean, url, removeJean}) {
  const [isInStock, setIsInStock] = useState(true)

  const updateStockBtn = () => {
    setIsInStock(!isInStock)
  }

  const handleDelete= () => {
    fetch(`${url}/${jean.id}`, {
      method: 'DELETE'
    })
    .then(r => {
      if (r.ok) {
        removeJean(jean.id)
      }
    })
  }

  return (
    <ul className="card" onClick={handleDelete}>
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
