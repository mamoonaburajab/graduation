import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ChildInfo.css";
import ChildImg from "../../assets/image/ChildDoctor.jpeg";
import { useChild } from "../../assets/useRef/ChildContext"; // Check the path

const ChildInfo = ({ childId }) => {
  const [childInfo, setChildInfo] = useState([]);
  const [display, setDisplay] = useState("Child"); // consistently use lowercase for simplicity
  const { ID } = useChild();

  // Fetch child information
  useEffect(() => {
    const fetchChildInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4301/api/child/ChildInfoPage/${ID}`
        );
        setChildInfo(response.data.data);
      } catch (error) {
        console.error("Error fetching child data:", error);
      }
    };

    if (ID) fetchChildInfo();
  }, [ID]); // Dependency array with childId to fetch new data when the ID changes

  return (
    <div className="child-info-container">
      <div className="buttons-container">
        <button onClick={() => setDisplay("Child")}>عرض معلومات الطفل</button>
        <button onClick={() => setDisplay("note")}>عرض الملاحظات</button>
      </div>
      <h3>{ID}</h3>
      <div>
        <img src={ChildImg} alt="" className="Child-bg-img" />
      </div>
      {display === "Child" && childInfo ? (
        <div className="card-img-child">
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <td>الاسم</td>{" "}
                  <td>
                    {childInfo.first_name} {childInfo.last_name}
                  </td>
                </tr>
                <tr>
                  <td>رقم الهوية</td> <td>{childInfo.ID}</td>
                </tr>
                <tr>
                  <td>الجنس</td> <td>{childInfo.gender}</td>
                </tr>
                <tr>
                  <td>تاريخ الميلاد</td> <td>{childInfo.DOB}</td>
                </tr>
                <tr>
                  <td>رقم الطفل التسلسلي</td>{" "}
                  <td>{childInfo.Child_Serial_No}</td>
                </tr>
                <tr>
                  <td>نوع الدم</td> <td>{childInfo.blood_type}</td>
                </tr>
                <tr>
                  <td>الحساسية</td> <td>{}</td>
                </tr>
                <tr>
                  <td>اسم الأم</td>{" "}
                  <td>
                    {childInfo.mother_first_name} {childInfo.mother_last_name}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : display === "note" ? (
        <div className="note-container">
          <p>Notes information will be displayed here.</p>
        </div>
      ) : null}
    </div>
  );
};

export default ChildInfo;
