import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css";

function App() {
  const SEX_LIST = [
    { label: "Nam", value: "male" },
    { label: "Nữ", value: "female" }
  ];

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const [form, setForm] = useState({});

  // Handle change
  const handleChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? !form[event.target.name]
        : event.target.value;

    setForm({
      ...form,
      [event.target.name]: value
    });
  };

  // Validate form
  const handleValidate = () => {
    const errors = {};

    if (!form.name) errors.name = "Required";
    if (!form.number) errors.number = "Required";

    if (!form.year) {
      errors.year = "Required";
    } else if (Number(form.year) <= 1900) {
      errors.year = "Year must be greater than 1900";
    }

    if (!form.nationality) errors.nationality = "Required";
    if (!form.city) errors.city = "Required";
    if (!form.district) errors.district = "Required";
    if (!form.ward) errors.ward = "Required";
    if (!form.address) errors.address = "Required";
    if (!form.phone) errors.phone = "Required";

    if (!form.email) {
      errors.email = "Required";
    } else if (!EMAIL_REGEX.test(form.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  // Submit
  const handleSubmit = () => {
    alert("Khai báo thành công!");
  };

  return (
    <div className="container">
      <h3>Khai báo y tế</h3>

      <Formik validate={handleValidate} onSubmit={handleSubmit}>
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {/* Họ tên */}
            <div className={errors.name ? "custom-input-error" : "custom-input"}>
              <label>Họ tên</label>
              <input name="name" onChange={handleChange} />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            {/* CMND / Hộ chiếu */}
            <div className={errors.number ? "custom-input-error" : "custom-input"}>
              <label>CMND / Hộ chiếu</label>
              <input name="number" onChange={handleChange} />
              {errors.number && <p className="error">{errors.number}</p>}
            </div>

            {/* Năm sinh */}
            <div className={errors.year ? "custom-input-error" : "custom-input"}>
              <label>Năm sinh</label>
              <input name="year" onChange={handleChange} />
              {errors.year && <p className="error">{errors.year}</p>}
            </div>

            {/* Giới tính */}
            <div className="custom-input">
              <label>Giới tính</label>
              {SEX_LIST.map((sex) => (
                <label key={sex.value} className="width-auto">
                  <input
                    type="radio"
                    name="gender"
                    value={sex.value}
                    onChange={handleChange}
                    className="width-auto"
                  />
                  {sex.label}
                </label>
              ))}
            </div>

            {/* Quốc tịch */}
            <div className={errors.nationality ? "custom-input-error" : "custom-input"}>
              <label>Quốc tịch</label>
              <input name="nationality" onChange={handleChange} />
              {errors.nationality && <p className="error">{errors.nationality}</p>}
            </div>

            {/* Địa chỉ */}
            <div className={errors.address ? "custom-input-error" : "custom-input"}>
              <label>Địa chỉ</label>
              <textarea name="address" onChange={handleChange} />
              {errors.address && <p className="error">{errors.address}</p>}
            </div>

            {/* Tỉnh */}
            <div className={errors.city ? "custom-input-error" : "custom-input"}>
              <label>Tỉnh/Thành</label>
              <input name="city" onChange={handleChange} />
              {errors.city && <p className="error">{errors.city}</p>}
            </div>

            {/* Quận */}
            <div className={errors.district ? "custom-input-error" : "custom-input"}>
              <label>Quận/Huyện</label>
              <input name="district" onChange={handleChange} />
              {errors.district && <p className="error">{errors.district}</p>}
            </div>

            {/* Phường */}
            <div className={errors.ward ? "custom-input-error" : "custom-input"}>
              <label>Phường/Xã</label>
              <input name="ward" onChange={handleChange} />
              {errors.ward && <p className="error">{errors.ward}</p>}
            </div>

            {/* Phone */}
            <div className={errors.phone ? "custom-input-error" : "custom-input"}>
              <label>Điện thoại</label>
              <input name="phone" onChange={handleChange} />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div className={errors.email ? "custom-input-error" : "custom-input"}>
              <label>Email</label>
              <input name="email" onChange={handleChange} />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
