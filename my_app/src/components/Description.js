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
      <img name="description-image" src={jean.image}></img>
      <h4>{jean.name}</h4>
      <p>{jean.price}</p>
      <div className="sizes">Sizes:
      {jean.size.map((size, index) => (
        <ul key={index}>{size}</ul> 
      ))}
      </div>
      <div className="color">Color: 
      {jean.color.map((color, index) => (
        <ul key={index}>{color}</ul>
      ))}
      </div>
    </ul>
    </div>
  );
}

export default Description;