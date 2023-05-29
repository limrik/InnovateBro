//from https://github.com/QuickNuggets/multi-step-form

import React from "react";
import { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { UseContextProvider } from "./contexts/StepperContext";

import Overview from "./components/steps/Overview";
import Purpose from "./components/steps/Purpose";
import Requirements from "./components/steps/Requirements";
import Final from "./components/steps/Final";

function NewForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Project Overview", "Purpose", "Requirements", "Complete"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Overview />;
      case 2:
        return <Purpose />;
      case 3:
        return <Requirements />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default NewForm;
