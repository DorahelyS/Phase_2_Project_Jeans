import React, { useEffect, useState } from 'react';
import Search from './Search.js'
import NewJeanForm from './NewJeanForm.js'
import JeanList from './JeanList.js';

function Home() {
  const url = "http://localhost:4000/jeans"
  const [jeans, setJeans] = useState([])
  const [search , setSearch] = useState("")

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
 
  function updateSearch ( e ) {
    setSearch (e.target.value);

  }


  return (
    <div className="Home">
      <div> 
        <h1> Jeansy </h1>
        <NewJeanForm url={url} addNewJean={addNewJean} />
        <Search search = {search} updateSearch = {updateSearch}/>
        <JeanList jeans={jeans} search = {search}/>
      </div>
    </div>
  
  );
}

export default Home;