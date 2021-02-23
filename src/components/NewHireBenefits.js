import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Button,
  Card,
  CardActionArea,
  Grid,
} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function NewHireBenefits() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom align="center">
        New Hire Benefits
      </Typography>
      <p>
        Choose a benefit package for your new employee. This is a required provision for
        Canadian employees if you intend to hire in British Columbia.
      </p>
      <p>
        You may choose one of our pre-designed packages or create a custom package depending on you
        and your employee's specific needs.
      </p>
      <Grid container spacing={3} justify="space-around" align="stretch">
        <Grid item xs={6}>
          <Card style={{ height: '100%'}}>
            <CardActionArea style={{ height: '100%', padding: '5%'}}>
              <Typography variant="h6" gutterBottom align="center">
                Basic
              </Typography>
              <ul style={{ 'font-size': '1rem', 'margin': '5%'}}>
                <li>Annual leave: 2 weeks</li>
                <li>Standard medical insurance</li>
                <li>Internet Expenses</li>
                <li>Parental leave</li>
              </ul>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card style={{ height: '100%'}}>
            <CardActionArea style={{ height: '100%', padding: '5%'}}>
              <Typography variant="h6" gutterBottom align="center">
                Basic+
              </Typography>
              <ul style={{ 'font-size': '1rem' , width: '90%', 'margin': '5%'}}>
                <li>Annual leave: 3 weeks</li>
                <li>Sick leave: 10 days</li>
                <li>Private medical insurance</li>
                <li>Internet Expenses</li>
                <li>Extended parental leave</li>
                <li>$250 Wellness reimbursement</li>
              </ul>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item >
          <Button variant="contained">
            New Custom Package
          </Button>
        </Grid>
      </Grid>

    </React.Fragment>
  );
}