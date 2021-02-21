import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import employeeJson from '../data/employee.json';

const employJson = employeeJson.employees;

const useStyles = makeStyles({
  tableHead: {
    background: '#d3d3d3',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px'
  },
  table: {
    minWidth: 650
  }
});

function createData(name, role, department, location, type, startDate) {
  return { name, role, department, location, type, startDate };
}

const rows = employJson.map(employee => createData(employee.name, employee.role, employee.department, employee.location, employee.type, employee.startDate));

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className = {classes.tableHead}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Start Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} class={classes.row}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.role}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.startDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}