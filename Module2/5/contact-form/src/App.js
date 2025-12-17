import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css";

function App() {
  // Regex email
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  // State form
  const [form, setForm] = useState({});

  // Xử lý change
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // Validate form
  const handleValidate = () => {
    const errors = {};

    // Validate name
    if (!form.name) {
      errors.name = "Required";
    }

    // Validate email
    if (!form.email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email address";
    }

    // Validate phone
    if (!form.phone) {
      errors.phone = "Required";
    }

    return errors;
  };

  // Submit form
  const handleSubmit = () => {
    alert("Add contact successfully!!!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact Form</h2>

      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className={errors.name ? "custom-input-error" : "custom-input"}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className={errors.email ? "custom-input-error" : "custom-input"}>
              <label>Email</label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className={errors.phone ? "custom-input-error" : "custom-input"}>
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
