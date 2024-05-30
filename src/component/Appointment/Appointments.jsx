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
        "http://localhost:3121/api/administrative_manager/AppointmentManager"
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

  const handleStatusChange = async (id, status) => {
    try {
      const response = await fetch(
        `http://localhost:3121/api/administrative_manager/AppointmentManager/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update status");
      }
      fetchAppointments(); // Refresh the appointments list
    } catch (error) {
      console.error("Error updating status:", error);
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
            <StyledTableCell align="right">الاسم</StyledTableCell>
            <StyledTableCell align="right">التاريخ</StyledTableCell>
            <StyledTableCell align="right">الوقت</StyledTableCell>
            <StyledTableCell align="right">سجل الطفل</StyledTableCell>
            <StyledTableCell align="right">حالة الموعد</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <StyledTableRow key={row.ID}>
              <StyledTableCell component="th" scope="row" align="right">
                {row.mother_name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {formatDate(row.date)}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Time}</StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="contained" color="primary">
                  سجل الطفل
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  variant="contained"
                  style={{ backgroundColor: 'rgb(124, 21, 21)', color: 'white' }}
                  onClick={() => handleStatusChange(row.ID, 0)}
                >
                  الغاء
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: 'rgb(14, 77, 14)', margin:'0px 10px' , color: 'white', marginLeft: '10px' }}
                  onClick={() => handleStatusChange(row.ID, 1)}
                >
                  اكتمل
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
