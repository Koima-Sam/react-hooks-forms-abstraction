import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: " ",
    lastName : " " ,
    admin: false
  })
  function handleSubmit(event){
    event.preventDefault()
  }

  function handleChange(event) {
    const inputName = event.target.name
    let value = event.target.value
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
    setFormData({...formData, [inputName]:value});
  }

  return (
    <form  onSubmit={handleSubmit}>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name ="lastName" onChange={handleChange} value={formData.lastName} />
      <input
        type="checkbox" name="admin" onChange={handleChange} checked={formData.admin}/>
      <button type="submit" >Submit</button>
    </form>
  );
}

export default Form;
