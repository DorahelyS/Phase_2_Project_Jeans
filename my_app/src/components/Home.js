import React, { useEffect, useState } from 'react';
import Search from './Search.js'
import NewJeanForm from './NewJeanForm.js'
import JeanList from './JeanList.js';

function Home() {
  const url = "http://localhost:4000/jeans"
  const [jeans, setJeans] = useState([])

  useEffect(() => {
    loadJeans()
  }, [])

  function loadJeans() {
    fetch (url)
    .then (r=>r.json())
    .then (data=>setJeans(data))
  }

  function addNewJean(newJean){
    setJeans([...jeans, newJean])
  }
 

  return (
    <div className="Home">
      <div> 
        <h1> Jeansy </h1>
        <NewJeanForm url={url} addNewJean={addNewJean} />
        <Search />
        <JeanList jeans={jeans}/>
      </div>
    </div>
  );
}

export default Home;