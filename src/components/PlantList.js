import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchText }) {
  return (
    <ul className="cards">
      {plants.filter(plant => plant.name.toLowerCase().includes(searchText.toLowerCase()))
      .map( plant => {
        return (
          <PlantCard plant={plant} key={plant.id} />
        )
      }
        
      )}
    </ul>
  );
}

export default PlantList;
