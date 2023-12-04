import React from "react";
import JeanCard from "./JeanCard";

function JeanList({jeans}) {
  return (
    <ul className="cards">{/* render JeanCards components in here */}
      {jeans.map((jean)=>
      <JeanCard key={jean.id} jean={jean} />
      )}
    </ul>
  );
}

export default JeanList;
