import React, { useState, useEffect } from "react";
import { useChild } from "../../assets/useRef/ChildContext"; // Check the path
import "./ChildTableMeasur.css";

const ChildTableMeasur = () => {
  const { ID } = useChild();
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newRow, setNewRow] = useState({
    age: "",
    weight: "",
    height: "",
    headCircumference: "",
    vitaminAD: "",
    vitaminK: "",
    iron: "",
    nurseName: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3121/api/doctor/measurement/${ID}`)
      .then((response) => response.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          setData([]);
        } else {
          setData(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData([]); // Set data to an empty array in case of error
      });
  }, [ID]);
  console.log(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRow((prevRow) => ({ ...prevRow, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split("T")[0];
    const newMeasurement = { ...newRow, date: currentDate, childID: ID };

    fetch("http://localhost:3121/api/doctor/measurement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMeasurement),
    })
      .then((response) => response.json())
      .then((data) => {
        setData((prevData) => [...prevData, data]);
        setNewRow({
          age: "",
          weight: "",
          height: "",
          headCircumference: "",
          vitaminAD: "",
          vitaminK: "",
          iron: "",
          nurseName: "",
        });
        setShowForm(false);
      })
      .catch((error) => console.error("Error adding data:", error));
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      <h1 className="title1">جدول القياسات</h1>
      <h2 className="form-heading">اسم الطفل</h2>
      <h3>{ID}</h3>

      {showForm && (
        <form className="form1" onSubmit={handleSubmit}>
          <label className="label">
            <span className="label-text">العمر (بالاشهر):</span>
            <input
              className="input"
              type="text"
              name="age"
              required
              value={newRow.age}
              onChange={handleChange}
            />
          </label>
          <label className="label">
            <span className="label-text">الوزن:</span>
            <input
              className="input"
              type="text"
              name="weight"
              required
              value={newRow.weight}
              onChange={handleChange}
            />
          </label>
          <label className="label">
            <span className="label-text">الطول:</span>
            <input
              className="input"
              type="text"
              required
              name="height"
              value={newRow.height}
              onChange={handleChange}
            />
          </label>
          <label className="label">
            <span className="label-text">محيط الرأس:</span>
            <input
              className="input"
              type="text"
              name="headCircumference"
              required
              value={newRow.headCircumference}
              onChange={handleChange}
            />
          </label>
          <label className="label">
            <span className="label-text">فيتامين أ+د:</span>
            <input
              className="input"
              type="text"
              name="vitaminAD"
              required
              value={newRow.vitaminAD}
              onChange={handleChange}
            />
          </label>
          <label className="label">
            <span className="label-text">فيتامين كابسويل أ:</span>
            <input
              className="input"
              type="text"
              name="vitaminK"
              required
              value={newRow.vitaminK}
              onChange={handleChange}
            />
          </label>
          <label className="label">
            <span className="label-text">الحديد:</span>
            <input
              className="input"
              type="text"
              name="iron"
              required
              value={newRow.iron}
              onChange={handleChange}
            />
          </label>
          <label className="label">
            <span className="label-text">اسم الممرضة:</span>
            <input
              className="input"
              type="text"
              name="nurseName"
              required
              value={newRow.nurseName}
              onChange={handleChange}
            />
          </label>
          <button className="button" type="submit">
            إضافة
          </button>
        </form>
      )}
      <table className="table">
        <thead>
          <tr>
            <th>اسم الممرضة</th>
            <th>الحديد</th>
            <th>فيتامين كابسويل أ</th>
            <th>فيتامين أ+د</th>
            <th>محيط الرأس</th>
            <th>الطول</th>
            <th>الوزن</th>
            <th>العمر (بالاشهر)</th>
            <th>التاريخ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.nurseName}</td>
              <td>{row.Iron}</td>
              <td>{row.vitaminK}</td>
              <td>{row.vitamin_A_D}</td>
              <td>{row.headCircumference}</td>
              <td>{row.height}</td>
              <td>{row.weight}</td>
              <td>{row.age}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="button" onClick={toggleForm}>
        إضافة
      </button>
    </div>
  );
};

export default ChildTableMeasur;
