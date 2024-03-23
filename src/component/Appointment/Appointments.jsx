import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import './Appointment.css'
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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, date, time) {
  return { name, date, time };
}

const rows = [
  createData('زبادي مجمد', '01/01/2023', '10:00 صباحاً'),
  createData('ساندويتش الآيس كريم', '02/01/2023', '11:30 صباحاً'),
  createData('إيكلير', '03/01/2023', '01:00 مساءً'),
  createData('كب كيك', '04/01/2023', '03:30 مساءً'),
  createData('زنجبيل بنجر', '05/01/2023', '05:00 مساءً'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} className='tableDoc'>
      <Table sx={{ minWidth: 700, direction: 'rtl' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>الاسم</StyledTableCell>
            <StyledTableCell align="right">التاريخ</StyledTableCell>
            <StyledTableCell align="right">الوقت</StyledTableCell>
            <StyledTableCell align="right">سجل الطفل</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
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
}
