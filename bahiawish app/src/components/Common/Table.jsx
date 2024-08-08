import React from 'react'
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles';
import TableMaterial from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from '../../styles/tableStyles'

const useStyles = makeStyles(styles)

const Table = ({headings, content}) => {
  const classes = useStyles()
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      // backgroundColor: theme.palette.common.black,
      backgroundColor: '#36304a',
      color: theme.palette.common.white,
      fontFamily: 'Montserrat',
      fontSize: 16,
      textTransform: 'uppercase'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      fontFamily: 'Montserrat'
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
  
  return (
    <>
    <TableContainer component={Paper}>
      <TableMaterial sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headings.map((head, index) => (
              <StyledTableCell component="th" scope="row" key={index}>{head}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
          {content.map((child, index) => (
              <StyledTableCell component="th" scope="row"  key={index}>
                {child}
              </StyledTableCell>
          ))}
            </StyledTableRow>
        </TableBody>
      </TableMaterial>
    </TableContainer>
    
    </>
    // <table className={classes.common_table}>
    //   <thead>
    //     {headings.map((item, index) => <th key={index}>{item}</th> )}
    //   </thead>
    //   {children}
    // </table>
  )
}

export default Table