import React, { useState } from 'react';
import Search from './Search.js'
import NewJeanForm from './NewJeanForm.js'
import JeanList from './JeanList.js';

function Home() {
  const [jeans, setJeans] = useState([])

  return (
    <div className="Home">
      <title>JEANSY</title>
      <div>
        <Search />
        <NewJeanForm />
        <JeanList />
      </div>
    </div>
  );
}

export default Home;