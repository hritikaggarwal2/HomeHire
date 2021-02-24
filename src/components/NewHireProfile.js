import React from "react";
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: "#5D576B !important",
    "& .Mui-focused": {
      color: "#5D576B",
    },
    "& .MuiInputBase-root input": {
      color: "#5D576B",
    },
  },
  focused: {
    color: "#5D576B !important",
  },
}));

export default function NewHireProfile() {
  const styleSheet = useStyles();

  return (
    <div className="container">
      <h3>New Hire Profile</h3>
      <p>
        Enter basic information for your new employee to create an official
        contract document and register them in the system. You can skip some
        information if you do not know at this point. Your employee can fill it
        in later.
      </p>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography>First Name</Typography>
          <TextField
            classes={{
              root: styleSheet.inputRoot,
            }}
            required
            label="Employee's legal first name"
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Last Name</Typography>
          <TextField
            classes={{
              root: styleSheet.inputRoot,
            }}
            required
            label="Employee's legal last name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Email Address</Typography>
          <TextField
            classes={{
              root: styleSheet.inputRoot,
            }}
            required
            label="Employee Email Address"
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Phone Number</Typography>
          <TextField
            classes={{
              root: styleSheet.inputRoot,
            }}
            label="+1 (___) ___-____"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Mailing Address</Typography>
          <TextField
            classes={{
              root: styleSheet.inputRoot,
            }}
            fullWidth
            label="Mailing Address"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Job Title</Typography>
          <TextField
            classes={{
              root: styleSheet.inputRoot,
            }}
            fullWidth
            label="Job Title"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Salary on Offer</Typography>
          <TextField
            classes={{
              root: styleSheet.inputRoot,
            }}
            required
            label="Amount in USD"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Signing Bonus</Typography>
          <TextField
            classes={{
              root: styleSheet.inputRoot,
            }}
            label="Amount in USD"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Start Date</Typography>
          <TextField
            classes={{
              root: styleSheet.inputRoot,
            }}
            fullWidth
            label="mm/dd/yyyy"
          />
        </Grid>
        <Grid item xs={6}>
          {/*placeholder for spacing*/}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                classes={{
                  root: styleSheet.inputRoot,
                }}
                color="secondary"
                name="saveCard"
                value="yes"
              />
            }
            label="Automatically generate offer letter"
          />
        </Grid>
      </Grid>
    </div>
  );
}
