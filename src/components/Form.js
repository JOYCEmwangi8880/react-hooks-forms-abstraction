import { useState } from "react";

function UpdatedForm() {
  const [formData, setFormData] = useState({
    firstName: "joyce",
    lastName: "mwangi",
  });

  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;

    
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="firstName" 
        name="firstName" 
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        id="lastName" 
        name="lastName" 
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        id="admin" 
        name="admin" 
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UpdatedForm;
