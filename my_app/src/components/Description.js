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
      <p className="sizes">Sizes:
      {jean.size.map((size, index) => (
        <span key={index}>{size}</span>
      ))}
      </p>
      <p className="color">Color: 
      {jean.color.map((color, index) => (
        <span key={index}>{color}</span>
      ))}
      </p>
    </ul>
    </div>
  );
}

export default Description;