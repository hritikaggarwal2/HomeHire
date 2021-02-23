import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NewHireStart from '../components/NewHireStart';
import NewHireProfile from '../components/NewHireProfile';
import NewHireBenefits from '../components/NewHireBenefits';
import NewHireConfirmation from '../components/NewHireConfirmation';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "60%",
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Add a New Employee', 'NewHire Profile', 'NewHire Benefits', 'Offer Letter Complete!'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <NewHireStart />;
    case 1:
      return <NewHireProfile />;
    case 2:
      return <NewHireBenefits />;
    case 3:
      return <NewHireConfirmation />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Start the Hiring Process
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {getStepContent(activeStep)}
            {activeStep === steps.length - 1 ?
              <React.Fragment>
              <div className={classes.buttons}>
                <Button onClick={handleBack} className={classes.button}>
                  Back
                </Button>
                <Button 
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/HomeHire"
                  className={classes.button}
                >
                  Finish
                </Button>
              </div>
              </React.Fragment> :
              <React.Fragment>
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Next
                </Button>
              </div>
              </React.Fragment>
              
            }
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}