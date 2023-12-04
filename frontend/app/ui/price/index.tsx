'use client'

import {
    Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
    styled, tableCellClasses
} from '@mui/material/'

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
  
  function createData(
    name: string,
    calories: string,
    fat: string
  ) {
    return { name, calories, fat };
  }
  
  const rows = [
    createData('Стандартная уборка', 'от 80', 'кв. м'),
    createData('Генеральная уборка', 'от 130', 'кв. м'),
    createData('Уборка после ремонта', 'от 190', 'кв. м'),
  ];
  
  export default function Price() {
    return (
      <TableContainer component={Paper} className='shadow-2xl'>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Название</StyledTableCell>
              <StyledTableCell align="right">Стоимость</StyledTableCell>
              <StyledTableCell align="right"> </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }