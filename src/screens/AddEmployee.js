import { useState } from "react";
import Stepper from "react-stepper-horizontal";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import colors from "../styles/_constants.scss";

// screens
import NewHireStart from "../components/NewHireStart";
import NewHireProfile from "../components/NewHireProfile";
import NewHireBenefits from "../components/NewHireBenefits";
import NewHireConfirmation from "../components/NewHireConfirmation";

function AddEmployee() {
  const steps = [{title: 'Employee Eligibility'}, {title: 'New Hire Profile'}, {title: 'New Hire Benefits'}, {title: 'Offer Letter'}];

  const [activeStep, setActiveStep] = useState(0);

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
    <div className="addEmp">
      <Stepper activeStep={activeStep} steps={steps} activeColor="#5d576b" completeColor="#bbb6c7"/>

      {getStepContent(activeStep)}

      {activeStep === steps.length - 1 ? (
        <>
          <div className="allButtons">
            <Button onClick={handleBack} className="button bck">
              Back
            </Button>
            <Button className="button nxt">
              <Link to="./">Accept</Link>
            </Button>
          </div>
        </>
      ) : (
        <>
          {activeStep !== 0 ? (
            <div className="allButtons">
            <Button onClick={handleBack} className="button bck">
              Back
            </Button>
            <Button onClick={handleNext} className="button nxt">
              Next
            </Button>
            </div>
          ) : (
            <div className="allButtons">
            <Button onClick={handleNext} className="button nxt">
              Check Eligibility
            </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AddEmployee;
