import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { backgroundColor: "", width: 0, height: 0 };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {backgroundColor, width, height} to parent
   *    & clear form. */

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  /** Render:
   *
   */
  return (
    <div className="NewBoxForm" onSubmit={handleSubmit}>
      <form className="NewBoxForm-form">
        <label htmlFor="backgroundColor">Color</label>
        <input
          id="backgroundColor"
          type="text"
          name="backgroundColor"
          onChange={handleChange}
          value={formData.backgroundColor}
        />

        <label htmlFor="width">Width</label>
        <input
          id="width"
          type="number"
          name="width"
          onChange={handleChange}
          value={formData.width}
        />
        <label htmlFor="height">Height</label>
        <input
          id="height"
          type="number"
          name="height"
          onChange={handleChange}
          value={formData.height}
        />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default NewBoxForm;
