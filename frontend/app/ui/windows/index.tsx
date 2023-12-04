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
    createData('Стандартное', '650', '1,5х1,5 кв. м'),
    createData('Не стандартное', '400', 'кв. м'),
    createData('Москитная сетка', '200', 'шт.'),
  ];
  
  export default function Windows() {
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