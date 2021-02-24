import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

export default function NewHireProfile() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom align="center">
        New Hire Profile
      </Typography>
      <p>
        Enter basic information for your new employee to create an official contract document and register them
        in the system. You can skip some information if you do not know at this point. Your employee can fill it in later. 
      </p>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography>
            First Name
          </Typography>
          <TextField required label="Employee's legal first name" fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
            Last Name
          </Typography>
          <TextField
            required
            label="Employee's legal last name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
            Email Address
          </Typography>
          <TextField required label="Employee Email Address" fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
            Phone Number
          </Typography>
          <TextField
            label="+1 (___) ___-____"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Mailing Address
          </Typography>
          <TextField
            fullWidth
            label="Mailing Address"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Job Title
          </Typography>
          <TextField
            fullWidth
            label="Job Title"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
            Salary on Offer
          </Typography>
          <TextField required label="Amount in USD" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
            Signing Bonus
          </Typography>
          <TextField
            label="Amount in USD"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Start Date
          </Typography>
          <TextField
            fullWidth
            label="mm/dd/yyyy"
          />
        </Grid>
        <Grid item xs={6}>
          {/*placeholder for spacing*/}
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Automatically generate offer letter"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}