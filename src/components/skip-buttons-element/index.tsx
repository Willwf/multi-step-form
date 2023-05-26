import * as Styles from "./styles";

import { Dispatch, SetStateAction } from "react";

interface SkipButtonsProps {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

export function SkipButtonsElement(props: SkipButtonsProps) {
  const { currentStep, setCurrentStep } = props;

  function updateCurrentStep(number: number) {
    if (currentStep === 4 && number === 1) return;

    setCurrentStep(currentStep + number);
  }

  return (
    <Styles.NextButtonDiv className={currentStep > 1 ? "backButtonActive" : ""}>
      <Styles.BackButton
        className={currentStep > 1 ? "active" : ""}
        onClick={(event) => {
          event.preventDefault();
          updateCurrentStep(-1);
        }}
      >
        Go Back
      </Styles.BackButton>
      {currentStep === 4 ? (
        <Styles.SubmitButton>Confirm</Styles.SubmitButton>
      ) : (
        <Styles.NextButton
          onClick={(event) => {
            event.preventDefault();
            updateCurrentStep(1);
          }}
        >
          Next Step
        </Styles.NextButton>
      )}
    </Styles.NextButtonDiv>
  );
}
