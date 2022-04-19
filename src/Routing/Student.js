import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const tableCellS = {
  color: "white",
  border: "1px solid #61dafb",
  fontSize:"19px"
}
const tableHead = {
  fontWeight: "Bold",
  color: "white",
  border: "1px solid #61dafb",
  fontSize:"21px"
}

const Student = () => {
  return (
    <div>
       <div className='container top-div'>
            <div className='div1'>
              Student Details
            </div>
            <div className='div1 div2'>
            <button className='btn btn-primary add'>Add Student</button>
            </div>
        </div>

        <br/>
        <div className='container'>
        <div className='tab'>
   <TableContainer style={{ backgroundColor: "black",  borderRadius:"5px"}}>
   <Table>
     <TableHead>
       <TableRow >
          <TableCell style={tableHead} align="center">Name</TableCell>
         <TableCell style={tableHead} align="center">Age</TableCell>
         <TableCell style={tableHead} align="center">Course</TableCell>
         <TableCell style={tableHead} align="center">Batch</TableCell>
         <TableCell style={tableHead} align="center">Change</TableCell>
       </TableRow>
     </TableHead>
     <TableBody>
         <TableRow >
           <TableCell style={tableCellS} align="center">Harvey</TableCell>
           <TableCell style={tableCellS} align="center">24</TableCell>
           <TableCell style={tableCellS} align="center">MERN</TableCell>
           <TableCell style={tableCellS} align="center">October</TableCell>
           <TableCell style={tableCellS} align="center"><button className='edit'>Edit</button></TableCell>
         </TableRow>

         <TableRow >
           <TableCell style={tableCellS} align="center">Mike</TableCell>
           <TableCell style={tableCellS} align="center">21</TableCell>
           <TableCell style={tableCellS} align="center">MERN</TableCell>
           <TableCell style={tableCellS} align="center">November</TableCell>
           <TableCell style={tableCellS} align="center"><button className='edit'>Edit</button></TableCell>
         </TableRow>

         <TableRow >
           <TableCell style={tableCellS} align="center">Miguel</TableCell>
           <TableCell style={tableCellS} align="center">20</TableCell>
           <TableCell style={tableCellS} align="center">MERN</TableCell>
           <TableCell style={tableCellS} align="center">December</TableCell>
           <TableCell style={tableCellS} align="center"><button className='edit'>Edit</button></TableCell>
         </TableRow>
           </TableBody>
         </Table>
     </TableContainer>
     </div>
        </div>
    </div>
  )
}

export default Student

