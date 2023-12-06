import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

function Description() {
  const [jean, setJean] = useState({});
  const params = useParams();
  const jeanId = params.id;

  const sizeFormOutline = {
    sizes: "",
  };
  const [sizeForm, setSizeForm] = useState(sizeFormOutline);

  const colorFormOutline = {
    color: "",
  };
  const [colorForm, setColorForm] = useState(colorFormOutline);

  useEffect(() => {
    fetch(`http://localhost:4000/jeans/${jeanId}`)
      .then((r) => r.json())
      .then((data) => setJean(data));
  }, [jeanId]);

  if (!jean.name) {
    return <h1>Loading...</h1>;
  }

  const handleSizeSubmit = (e) => {
    e.preventDefault();
    const updatedSizes = [...jean.sizes, sizeForm.sizes];
    fetch(`http://localhost:4000/jeans/${jeanId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sizes: updatedSizes,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        setJean(data);
        setSizeForm(sizeFormOutline);
      });
  };

  const handleColorSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/jeans/${jeanId}`, {
      method: "PATCH",
      body: JSON.stringify({
        colors: [...jean.colors, colorForm.color],
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setJean(data);
        setColorForm(colorFormOutline);
      });
  };

  const handleSizeChange = (e) => {
    setSizeForm({
      ...sizeForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleColorChange = (e) => {
    setColorForm({
      ...colorForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="Description">
      <header>
        <NavBar />
      </header>
      <ul>
        <img
          className="description-image"
          src={jean.image}
          alt={jean.name}
        ></img>
        <h4>{jean.name}</h4>
        <p>Price: ${jean.price.toFixed(2)} </p>
        <div className="sizes">
          Sizes:
          <select>
            {jean.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="color">
          Color:
          <select>
            {jean.colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </ul>
      <form onSubmit={handleSizeSubmit} className="size-submit">
        <input
          onChange={handleSizeChange}
          value={sizeForm.sizes}
          name="sizes"
          placeholder="Enter Size"
        />
        <button type="submit"> Add Size</button>
      </form>
      <form onSubmit={handleColorSubmit} className="color-submit">
        <input
          onChange={handleColorChange}
          value={colorForm.color}
          name="color"
          placeholder="Enter Color"
        />
        <button type="submit"> Add Color</button>
      </form>
    </div>
  );
}

export default Description;
