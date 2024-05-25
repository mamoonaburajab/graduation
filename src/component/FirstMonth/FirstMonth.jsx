import React, { useState } from 'react';
import './FirstMonth.css'; // Import the CSS file for styling

const FirstMonthForm = () => {
  const [formData, setFormData] = useState({
    IPV: false,
    IPV_ID: '',
    Doctor_Name: ''
  });

  const doctors = ['د. سميث', 'د. جونسون', 'د. لي']; // Example list of doctors

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>
          IPV:
          <input
          className='checkbox'
            type="checkbox"
            name="IPV"
            checked={formData.IPV}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
           .IPV Lot No
          <input
            type="text"
            name="IPV_ID"
            value={formData.IPV_ID}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          اسم الطبيب:
          <select
            name="Doctor_Name"
            value={formData.Doctor_Name}
            onChange={handleChange}
          >
            <option value="">اختر طبيب</option>
            {doctors.map((doctor) => (
              <option key={doctor} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button type="submit" className="submit-button">إرسال</button>
    </form>
  );
};

export default FirstMonthForm;
