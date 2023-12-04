import React, { useState } from 'react';
import Search from './Search.js'
import NewJeanForm from './NewJeanForm.js'
import JeanList from './JeanList.js';

function Home() {
  const [jeans, setJeans] = useState([])

  return (
    <div className="Home">
      <div> 
        <h1> Jeansy </h1>
        <NewJeanForm />
        <Search />
        <JeanList />
      </div>
    </div>
  );
}

export default Home;