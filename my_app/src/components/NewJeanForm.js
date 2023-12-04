import React, { useState } from "react";

function NewJeanForm({url, addNewJean}) {
const formOutline = {
  name: "",
  price: 0,
  image: ""
}

const [form, setForm] = useState(formOutline)

const handleSubmit = (e) => {
  e.preventDefault()
  fetch(url, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({
      ...form,
      price: parseFloat(form.price)
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
    <div className="new-Jean-form">
      <h2>Add New Jean to Donate</h2>
      <form onSubmit = {handleSubmit}>
        <input onChange={handleChange} value = {form.name} name = "name" placeholder = "Name"/>
        <input onChange={handleChange} value = {form.price} name = "price"  placeholder = "Price"/>
        <input onChange={handleChange} value = {form.image} name = "image"  placeholder = "URL"/>
        <button type="submit">Add Jean</button>
      </form>
    </div>
  );
}

export default NewJeanForm;
