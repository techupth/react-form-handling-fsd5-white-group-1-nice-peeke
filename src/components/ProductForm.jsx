import React, { useState } from "react";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const showDataFromField = () => {
    const dataToShow = `
      {
        "name": "${formData.name}",
        "price": ${formData.price},
        "image": "${formData.image}",
        "description": "${formData.description}"
      }
    `;
    alert(dataToShow);
  };

  const inputFields = ["Name", "Image Url", "Price", "Description"].map(
    (field) => ({
      name: field,
      label: field,
      type: field === "Description" ? "textarea" : "text",
      placeholder: `Enter ${field} here`,
    })
  );

  return (
    <form
      className="post-form"
      onSubmit={(e) => {
        e.preventDefault();
        showDataFromField();
      }}
    >
      <h1>Create Product Form</h1>
      {inputFields.map(({ name, label, type, placeholder }) => (
        <div className="input-container" key={name}>
          <label>
            {label}
            {type === "textarea" ? (
              <textarea
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
                value={formData[name]}
                rows={4}
                cols={30}
              />
            ) : (
              <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
                value={formData[name]}
              />
            )}
          </label>
        </div>
      ))}
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default ProductForm;
