import React, { useState } from "react";
import AfterBirthForm from "../AfterBirth/AfterBirth";
import FirstMonthForm from "../FirstMonth/FirstMonth";
import SecondMonthForm from "../SecondMonth/SecondMonth";
import FourthMonthForm from "../FourthMonth/FourthMonth";
import SixthMonthForm from "../SixthMonth/SixthMonth";
import TwelfthMonthForm from "../TwelfthMonth/TwelfthMonth";
import EighteenthMonthForm from "../EighteenthMonth/EighteenthMonth";
import "./Add_Vac.css"; // Import the CSS file

const Add_Vac = () => {
  const [selectedForm, setSelectedForm] = useState("");

  const handleChange = (e) => {
    setSelectedForm(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">نموذج التطعيم</h1>
      <select className="select" onChange={handleChange} value={selectedForm}>
        <option value="">اختر التطعيم</option>
        <option value="afterBirth">بعد الولادة</option>
        <option value="firstMonth">الشهر الأول</option>
        <option value="secondMonth">الشهر الثاني</option>
        <option value="fourthMonth">الشهر الرابع</option>
        <option value="sixthMonth">الشهر السادس</option>
        <option value="twelfthMonth">الشهر الثاني عشر</option>
        <option value="eighteenthMonth">الشهر الثامن عشر</option>
      </select>

      <div className="form-container">
        {selectedForm === "afterBirth" && <AfterBirthForm />}
        {selectedForm === "firstMonth" && <FirstMonthForm />}
        {selectedForm === "secondMonth" && <SecondMonthForm />}
        {selectedForm === "fourthMonth" && <FourthMonthForm />}
        {selectedForm === "sixthMonth" && <SixthMonthForm />}
        {selectedForm === "twelfthMonth" && <TwelfthMonthForm />}
        {selectedForm === "eighteenthMonth" && <EighteenthMonthForm />}
      </div>
    </div>
  );
};

export default Add_Vac;
