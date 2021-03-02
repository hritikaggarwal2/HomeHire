import React from "react";
import {
  InputLabel,
  MenuItem,
  TextField,
  Grid,
  FormControl,
  Select,
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

export default function NewHireStart() {
  const styleSheet = useStyles();

  return (
    <div className="container">
      <h3>Add New Employee</h3>
      <Grid container item spacing={3}>
        <Grid item xs={12}>
          <h4>Where will your remote hire live and work from?</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel
              classes={{
                focused: styleSheet.focused,
              }}
              id="country-label"
            >
              Country
            </InputLabel>
            <Select id="country" defaultValue="">
              <MenuItem value={"USA"}>United States</MenuItem>
              <MenuItem value={"CA"}>Canada</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            classes={{
              root: styleSheet.inputRoot,
            }}
            required
            id="zipcode"
            name="zipcode"
            label="Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h4>What is your remote hire's residency status?</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h4>Input employee SIN</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel
              classes={{
                focused: styleSheet.focused,
              }}
              id="residency-label"
            >
              Resident Status
            </InputLabel>
            <Select id="residency" defaultValue="">
              <MenuItem value={"USA"}>Citizen</MenuItem>
              <MenuItem value={"CA"}>Visa</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            classes={{
              root: styleSheet.inputRoot,
            }}
            required
            id="cardName"
            label="Employee SIN"
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
      </Grid>
    </div>
  );
}
