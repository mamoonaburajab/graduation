import React from 'react';

const AppointmentRow = ({ name, ageInMonths, appointmentTime }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{ageInMonths} شهر</td>
      <td>{appointmentTime}</td>
    </tr>
  );
};

export default AppointmentRow;
