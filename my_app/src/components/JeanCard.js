import React from "react";

function JeanCard() {
  return (
    <li className="card">
      <img src={"https://via.placeholder.com/400"} alt={"jean name"} />
      <h4>{"jean name"}</h4>
      <p>Price: {"jean price"}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default JeanCard;
