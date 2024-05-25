import React, { useState } from 'react';
import './AfteBirht.css'; // Import the CSS file for styling

const AfterBirthForm = () => {
  const [formData, setFormData] = useState({
    BCG: false,
    BCG_ID: '',
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
      <div className="form-group ">
        <label>
          BCG :
          <input 
          className='checkbox'
            type="checkbox"
            name="BCG"
            checked={formData.BCG}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
         .BCG Lot No
          <input
            type="text"
            name="BCG_ID"
            value={formData.BCG_ID}
            onChange={handleChange}
            placeholder='BCG Lot Number'
          />
        </label>
      </div>
      <div className="form-group">
        <label>
         
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

export default AfterBirthForm;
