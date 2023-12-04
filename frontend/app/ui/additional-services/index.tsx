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
    createData('Уборка с парогенератором', '1000', '-'),
    createData('Мойка духового шкафа внутри', '600', '-'),
    createData('Мойка кухонной вытяжки внутри', '500', '-'),
    createData('Мойка внутри СВЧ', '400', '-'),
    createData('Уборка на балконе(протереть пыль, помыть полы)', '400', '-'),
    createData('Уборка гардеробной комнаты', '700', '-'),
    createData('Мытье внутри кухонных шкафчиков (пустых)', '700', '-'),
    createData('Уборка лотка животного', '400', '-'),
    createData('Мытье посуды', '700', '-'),
    createData('Глажка белья', '700', 'час'),
    createData('Доставка оборудования', '1500', '-'),
    createData('Доставка оборудования за МКАД', '1500 + 40', 'р/км'),
];
  
  export default function AdditionalServices() {
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