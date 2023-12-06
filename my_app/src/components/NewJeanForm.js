import React, { useState } from "react";

function NewJeanForm({url, addNewJean}) {
const formOutline = {
  name: "",
  price: "",
  image: "",
  sizes: "",
  colors: "",
}

const [form, setForm] = useState(formOutline)

const handleSubmit = (e) => {
  e.preventDefault()
  fetch(url, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({
      name: form.name,
      price: parseFloat(form.price),
      image: form.image,
      sizes: [
        form.sizes
      ],
      colors: [
        form.colors
      ]
    })
  })
  .then(r => r.json())
  .then(data => {
    addNewJean(data)
    setForm(formOutline)
  })
}

//reset the form value to what the user inputs
const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
}


  return (
    <div className="new-jean-form">
      <h2>Add New Jean</h2>
      <form onSubmit = {handleSubmit}>
        <input onChange={handleChange} value = {form.name} name = "name" placeholder = "Name"/>
        <input onChange={handleChange} value = {form.price} name = "price"  step = "0.01" placeholder = "Price"/>
        <input onChange={handleChange} value = {form.image} name = "image"  placeholder = "URL"/>
        <input onChange={handleChange} value = {form.sizes} name="sizes" placeholder="Size" />
        <input onChange={handleChange} value = {form.colors} name="colors" placeholder="Color" />
        <button type="submit">Add Jean</button>
      </form>
    </div>
  );
}

export default NewJeanForm;
