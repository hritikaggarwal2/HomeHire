import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActionArea,
  Grid,
  Link,
  Typography,
  IconButton,
} from '@material-ui/core/';
import AssignmentIcon from '@material-ui/icons/Assignment';

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

export default function NewHireConfirmation() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom align="center">
        Offer letter draft complete!
      </Typography>
      <p>
        Please review the initial offer draft and confirm.
        We will review your draft shortly and get back to you within 24 hours.
      </p>
      <div>
        <Grid container>
          <Grid item xs={12}>
            <h3>Offer document</h3>
          </Grid>
          <Grid item container xs={12} component={Card}>
            <Grid item xs={2} component={CardActionArea}>
              <IconButton><AssignmentIcon fontSize="large" /></IconButton>
            </Grid>
            <Grid item xs={10} sm={7}>
              <Typography >
                Offer Draft
              </Typography>
              <Typography color="textSecondary" >
                Date created: 2/24/2021
            </Typography>
            </Grid>
            <Grid container item xs={3} justify="space-around" alignItems="center">
              <Grid item component={Button} variant="contained">Download</Grid>
              <Grid item xs={12}>{/* hacky spacing force */}</Grid>
              <Grid item component={Link}>View</Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

    </React.Fragment>
  );
}