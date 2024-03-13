import React, { useState } from "react";
import { Calendar, TimePicker, Button, theme } from "antd";
import NavbarM from "../navbarMom/NavbarM";

const BookAppointment = () => {
  const { token } = theme.useToken();
  const [selectedTime, setSelectedTime] = useState(null);

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const onTimeChange = (time) => {
    console.log(time.format("HH:mm:ss"));
    setSelectedTime(time);
  };

  const handleBookingSubmit = () => {
    // Add your logic for submitting the booking with selected date and time
    console.log("Booking submitted:", {
      date: selectedTime ? selectedTime.format("YYYY-MM-DD") : null,
      time: selectedTime ? selectedTime.format("HH:mm:ss") : null,
    });
  };

  const wrapperStyle = {
    width: 300,
    margin: "auto",
    marginTop: 80,
    padding: 20,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    backgroundColor: token.colorBackgroundLight,
    boxShadow: `0 2px 4px ${token.colorBoxShadow}`,
  };

  const buttonStyle = {
    marginTop: 10,
  };

  return (
    <div style={wrapperStyle}>
      <NavbarM />
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      <TimePicker
        format="HH:mm"
        placeholder="Select Time"
        onChange={onTimeChange}
        style={{ margin: "10px 0" }}
      />
      <Button type="primary" onClick={handleBookingSubmit} style={buttonStyle}>
        Submit
      </Button>
    </div>
  );
};

export default BookAppointment;
