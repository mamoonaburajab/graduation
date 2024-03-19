import React from 'react';

const AppointmentRow = ({ name, ageInMonths, appointmentTime }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{ageInMonths} months</td>
      <td>{appointmentTime}</td>
    </tr>
  );
};

export default AppointmentRow;
