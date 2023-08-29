import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage( { plants, setPlants }) {

  const [searchText, setSearchText] = useState("")

  function updateSearch(text) {
    setSearchText(text)
  }

  function handleSubmitPlant(newPlant) {
    
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(plant => setPlants([... plants, plant])
      )
  }

  return (
    <main>
      <NewPlantForm onSubmitPlant={handleSubmitPlant}/>
      <Search searchText={searchText} onSearchChange={updateSearch} />
      <PlantList plants={plants} searchText={searchText} />
    </main>
  );
}

export default PlantPage;
