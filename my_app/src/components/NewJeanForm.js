import React, { useState } from "react";

function NewJeanForm() {
const formOutline = {
  name: "",
  price: 0,
  image: ""
}

const [form, setForm] = useState(formOutline)




  return (
    <div className="new-Jean-form">
      <h2>Add New Jean to Donate</h2>
      <form>
        <input placeholder = "Name"/>
        <input placeholder = "URL"/>
        <button type="submit">Add Jean</button>
      </form>
    </div>
  );
}

export default NewJeanForm;
