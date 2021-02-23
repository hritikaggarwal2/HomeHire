
import employeeJson from '../data/employee.json';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import LanguageIcon from '@material-ui/icons/Language';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const useStyles = makeStyles({
  table: {  
    width:650
  },
  rowStyle: {
    background: '#ECECEC'
  }
});

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
};

export default function EmployeeNamecard() {
  const classes = useStyles();

  return (
      <div className='table-container'>
        <h1>Ryan Gosling</h1>
        <List component="nav" style={flexContainer}>
        <ListItem >
          <ListItemIcon>
            <DesktopMacIcon />
          </ListItemIcon>
          <ListItemText primary="Principal Engineer" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <MailOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="ryan.gosling@lalalland.com" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText primary="English, French" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary="London, Ontario" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <QueryBuilderIcon />
          </ListItemIcon>
          <ListItemText primary="Local Time: 9:00am, Wed, 24 Feb 2021" />
        </ListItem>
      </List>
      <Divider />
      <Table className='testTable' >      
          <TableRow className={classes.rowStyle}>
              <TableCell variant="head"><b>Full Name</b></TableCell>
              <TableCell>Ryan Thomas Gosling</TableCell>
          </TableRow>     
          <TableRow className={classes.rowStyle}>
              <TableCell variant="head"><b>Email</b></TableCell>
              <TableCell>ryan.gosling@lalalland.com</TableCell>
          </TableRow>   
          <TableRow className={classes.rowStyle}>
              <TableCell variant="head"><b>Personal Phone</b></TableCell>
              <TableCell>+ 1 (250) 555 0199</TableCell>
          </TableRow> 
          <TableRow className={classes.rowStyle}>
              <TableCell variant="head"><b>Emergency Contact</b></TableCell>
              <TableCell>+ 1 (250) 660 2345</TableCell>
          </TableRow> 
          <TableRow className={classes.rowStyle}>
              <TableCell variant="head"><b>Date of Birth</b></TableCell>
              <TableCell>12 November 1980</TableCell>
          </TableRow> 
          <TableRow className={classes.rowStyle}>
              <TableCell variant="head"><b>Mailing Address</b></TableCell>
              <TableCell>3616 Dundas St., London, Ontario, N6B 3L5</TableCell>
          </TableRow> 
          <TableRow className={classes.rowStyle}>
              <TableCell variant="head"><b>Physical Address</b></TableCell>
              <TableCell>4086 René-Lévesque Blvd., Montreal, Québec, H3B 4W8</TableCell>
          </TableRow>        
      </Table>
      </div>
  );
}