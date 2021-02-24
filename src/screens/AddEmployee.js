import { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@material-ui/core";

import { Link } from "react-router-dom";

// screens
import NewHireStart from "../components/NewHireStart";
import NewHireProfile from "../components/NewHireProfile";
import NewHireBenefits from "../components/NewHireBenefits";
import NewHireConfirmation from "../components/NewHireConfirmation";

function AddEmployee() {
  const steps = [
    "Employee Eligibility",
    "New Hire Profile",
    "New Hire Benefits",
    "Offer Letter",
  ];
  const [activeStep, setActiveStep] = useState(0);

  const [data, setData] = useState({});

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
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className="pageWithNav addEmp">
      <h1>Add New Employee</h1>
      <Stepper activeStep={activeStep} className="stepper">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {getStepContent(activeStep)}

      {activeStep === steps.length - 1 ? (
        <>
          <div className="allButtons">
            <Button onClick={handleBack} className="button">
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={{
                pathname: "/",
                state: {
                  addEmployee: true,
                },
              }}
              className="button nxt"
            >
              Send For Review
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="allButtons">
            {activeStep !== 0 && (
              <Button onClick={handleBack} className="button">
                Back
              </Button>
            )}
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className="button nxt"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default AddEmployee;
