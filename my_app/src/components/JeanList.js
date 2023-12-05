import React from "react";
import JeanCard from "./JeanCard";



function JeanList({jeans, search}) {
  
  const filteredJeans = jeans.filter((jean => {
  return jean.name.toLowerCase().includes(search.toLowerCase())}))


  return (
    <ul className="cards" >
      {filteredJeans.map((jean)=>
      <JeanCard key={jean.id} jean={jean} />
      )}
    </ul>
  );
}

export default JeanList;
