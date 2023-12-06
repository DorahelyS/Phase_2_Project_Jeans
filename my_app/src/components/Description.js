import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';

function Description() {
  const[jean, setJean] = useState({})
  const params = useParams()
  const jeanId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/jeans/${jeanId}`)
    .then(r => r.json())
    .then(data => setJean(data))
  }, [jeanId])

  if(!jean.name) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="Description">
      <header>
        <NavBar />
      </header>
    <ul>
      <img className="description-image" src={jean.image} alt={jean.name}></img>
      <h4>{jean.name}</h4>
      <p>Price: ${jean.price.toFixed(2)} </p>
      <div className="sizes">Sizes: 
      <select>
      {jean.sizes.map((size, index) => (
        <option  key={index} value = {size}>{size}</option> 
      ))}
      </select>
      </div>
      <div className="color">Color: 
      <select>
      {jean.colors.map((color, index) => (
        <option key={index} value={color}>{color}</option>
      ))}
      </select>
      </div>
    </ul>
    </div>
  );
}

export default Description;