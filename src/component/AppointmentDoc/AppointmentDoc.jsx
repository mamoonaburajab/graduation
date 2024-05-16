import React from 'react';
import './AppointmentDoc.css'; // Import CSS file for styling
import AppointmentRow from '../AppointmentRow/AppointmentRow';

const AppointmentDoc = () => {
  const appointments = [
    { name: 'احمد محمد', ageInMonths: 24, appointmentTime: '١٠:٠٠ ص' },
    { name: 'سامر احمد', ageInMonths: 12, appointmentTime: '١١:٣٠ ص' },
    { name: 'اسيل علي', ageInMonths: 8, appointmentTime: '١:٠٠م' },
  ];

  return (
    <div className='AppointmentDoc'>
        <h1>المواعيد القادمة</h1>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>الاسم</th>
            <th>العمر</th>
            <th>وقت الموعد</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <AppointmentRow
              key={index}
              name={appointment.name}
              ageInMonths={appointment.ageInMonths}
              appointmentTime={appointment.appointmentTime}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentDoc;
