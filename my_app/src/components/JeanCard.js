import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <ul className="card" >
      <img src={jean.image} alt={jean.name} />
      <h4>{jean.name}</h4>
      <p>Price: {jean.price}</p>
      <button className={`primary ${isInStock ? "active" : ""}`}
      onClick={updateStockBtn}>
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>
      <p>
        <Link to={`/jean/${jean.id}`}>View Description</Link>
      </p>
      <button onClick={handleDelete}>Delete</button>
    </ul>
  );
}

export default JeanCard;
