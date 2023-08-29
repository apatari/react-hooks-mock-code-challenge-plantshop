import React, { useState } from "react";

function PlantCard({ plant }) {

  const [stocked, setStocked] = useState(true)

  function handleClick() {
    setStocked((stocked) => !stocked)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {true ? (
        <button className={stocked? "primary" : ""} onClick={handleClick} >{stocked? "In Stock" : "Out of Stock"}</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
