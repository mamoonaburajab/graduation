import React from "react";
import "./VacTable.css";

class VaccinationTable extends React.Component {
  render() {
    return (
      <div>
        <table className="rtl-table">
          <thead>
            <tr>
              <th>4</th>
              <th>3</th>
              <th>2</th>
              <th>1</th>
              <th></th>
              <th>اسم المطعوم</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="disable"></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="date">تاريخ التطعيم</td>
              <td rowSpan="3">BCG</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="lot-no">Lot No</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="doctor-name">اسم الطبيب</td>
            </tr>
          </tbody>{" "}
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="date">تاريخ التطعيم</td>
              <td rowSpan="3">Hepatitis B</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="lot-no">Lot No</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="doctor-name">اسم الطبيب</td>
            </tr>
          </tbody>{" "}
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="date">تاريخ التطعيم</td>
              <td rowSpan="3">IPV</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="lot-no">Lot No</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="doctor-name">اسم الطبيب</td>
            </tr>
          </tbody>{" "}
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="date">تاريخ التطعيم</td>
              <td rowSpan="3">OPV</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="lot-no">Lot No</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="doctor-name">اسم الطبيب</td>
            </tr>
          </tbody>{" "}
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="date">تاريخ التطعيم</td>
              <td rowSpan="3">Rota</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="lot-no">Lot No</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="doctor-name">اسم الطبيب</td>
            </tr>
          </tbody>{" "}
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="date">تاريخ التطعيم</td>
              <td rowSpan="3">Penta</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="lot-no">Lot No</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="doctor-name">اسم الطبيب</td>
            </tr>
          </tbody>{" "}
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="date">تاريخ التطعيم</td>
              <td rowSpan="3">PCV</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="lot-no">Lot No</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="doctor-name">اسم الطبيب</td>
            </tr>
          </tbody>{" "}
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="date">تاريخ التطعيم</td>
              <td rowSpan="3">MMR</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="lot-no">Lot No</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="doctor-name">اسم الطبيب</td>
            </tr>
          </tbody>{" "}
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="date">تاريخ التطعيم</td>
              <td rowSpan="3">BCG</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="lot-no">Lot No</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="doctor-name">اسم الطبيب</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default VaccinationTable;
