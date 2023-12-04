import React from "react";

function JeanCard({jean}) {
  return (
    <ul className="card">
      <img src={jean.image} alt={jean.name} />
      <h4>{jean.name}</h4>
      <p>Price: {jean.price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </ul>
  );
}

export default JeanCard;
