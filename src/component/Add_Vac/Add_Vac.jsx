import React, { useState } from "react";
import './Add_Vac.css'; // Ensure CSS is properly linked

const Add_Vac = ({ index }) => {
  const [formData, setFormData] = useState({
    BCG: false,
    BCG_ID: "",
    Hepatitis_B: false,
    Hepatitis_B_ID: "",
    Doctor_Name: "",
  });

  const doctors = ["الدكتور سميث", "الدكتور جونز", "الدكتور براون"]; // Example doctor names in Arabic

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  return (
    <div className="form-container">
      <label className="form-item">
        <input
          type="checkbox"
          name="BCG"
          checked={formData.BCG}
          onChange={handleChange}
        />
        BCG
      </label>
      <input
        type="text"
        name="BCG_ID"
        value={formData.BCG_ID}
        className="input-text form-item"
        placeholder="معرّف بي سي جي"
        onChange={handleChange}
      />
      <label className="form-item">
        <input
          type="checkbox"
          name="Hepatitis_B"
          checked={formData.Hepatitis_B}
          onChange={handleChange}
        />
        Hepatitis B
      </label>
      <input
        type="text"
        name="Hepatitis_B_ID"
        value={formData.Hepatitis_B_ID}
        className="input-text form-item"
        placeholder="معرّف التهاب الكبد ب"
        onChange={handleChange}
      />
      <select
        name="Doctor_Name"
        value={formData.Doctor_Name}
        className="select-doctor form-item"
        onChange={handleChange}
      >
        <option value="">اختر طبيب</option>
        {doctors.map(doctor => (
          <option key={doctor} value={doctor}>{doctor}</option>
        ))}
      </select>
      <button className="submit-btn form-item">Submit</button>
    </div>
  );
};

const FormsList = () => {
  const [selectedForm, setSelectedForm] = useState(null);

  const handleSelect = (e) => {
    setSelectedForm(Number(e.target.value));
  };

  return (
    <div className="forms-list">
      <select className="selection-dropdown" onChange={handleSelect}>
        <option value="">Select a form</option>
        {[...Array(7)].map((_, index) => (
          <option key={index} value={index}>Form {index + 1}</option>
        ))}
      </select>
      {selectedForm !== null && <Add_Vac key={selectedForm} index={selectedForm} />}
    </div>
  );
};

export default FormsList;
