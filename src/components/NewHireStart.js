import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { InputLabel, MenuItem } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function NewHireStart() {
  return (
    <React.Fragment>
      <Typography variant="h6">
        Where will your remote hire live and work from?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel id="country-label">Country</InputLabel>
            <Select
              id="country"
            >
              <MenuItem value={"USA"}>United States</MenuItem>
              <MenuItem value={"CA"}>Canada</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zipcode"
            name="zipcode"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
      </Grid>
      <Typography variant="h6">
        What is your remote hire's residency status?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel id="residency-label">Resident Status</InputLabel>
            <Select
              id="residency"
            >
              <MenuItem value={"USA"}>Citizen</MenuItem>
              <MenuItem value={"CA"}>Visa</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}