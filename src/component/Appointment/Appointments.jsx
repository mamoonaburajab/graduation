// Appointment.js
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "./Appointment.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("ar-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
   
  }).format(date);
};

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch(
        "http://localhost:3078/api/Doctor/Appointments"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch appointments");
      }
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  return (
    <TableContainer component={Paper} className="tableDoc">
      <Table
        sx={{ minWidth: 700, direction: "rtl" }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>الاسم</StyledTableCell>
            <StyledTableCell align="right">التاريخ</StyledTableCell>
            <StyledTableCell align="right">الوقت</StyledTableCell>
            <StyledTableCell align="right">سجل الطفل</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <StyledTableRow key={row.ID}>
              <StyledTableCell component="th" scope="row">
                {row.child_name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {formatDate(row.date)}
              </StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="contained" color="primary">
                  سجل الطفل
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Appointment;
