import React, { useState } from 'react';
import './TwelfthMonth.css'; // Import the CSS file for styling

const TwelfthMonthForm = () => {
  const [formData, setFormData] = useState({
    PCV: false,
    PCV_ID: '',
    MMR: false,
    MMR_ID: '',
    Doctor_Name: ''
  });

  const doctors = ['د. سميث', 'د. جونسون', 'د. لي']; // Example list of doctors
  const mmrIds = ['MMR1', 'MMR2', 'MMR3']; // Example list of MMR IDs

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
          PCV:
          <input
          className='checkbox'

            type="checkbox"
            name="PCV"
            checked={formData.PCV}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          معرف PCV:
          <input
            type="text"
            name="PCV_ID"
            value={formData.PCV_ID}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          MMR:
          <input
            type="checkbox"
            name="MMR"
            checked={formData.MMR}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          معرف MMR:
          <select
            name="MMR_ID"
            value={formData.MMR_ID}
            onChange={handleChange}
          >
            <option value="">اختر معرف MMR</option>
            {mmrIds.map((id) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
          </select>
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

export default TwelfthMonthForm;
