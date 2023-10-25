import { useState } from "react";

function UpdatedForm() {
  const [formData, setFormData] = useState({
    firstName: "joyce",
    lastName: "mwangi",
  });

  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;

   

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
   
      <button type="submit">Submit</button>
    </form>
  );
}

export default UpdatedForm;
