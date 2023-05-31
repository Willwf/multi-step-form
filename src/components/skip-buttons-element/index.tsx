import * as Styles from "./styles";

import { Dispatch, SetStateAction } from "react";

interface SkipButtonsProps {
  nameInput: string;
  emailInput: string;
  phoneInput: string;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  setEmptyFields: Dispatch<SetStateAction<string[]>>;
}

export function SkipButtonsElement(props: SkipButtonsProps) {
  const {
    nameInput,
    emailInput,
    phoneInput,
    currentStep,
    setCurrentStep,
    setEmptyFields,
  } = props;

  function handleValidation() {
    const emptyFields = [];

    if (nameInput.trim() === "") {
      emptyFields.push("name");
    }

    if (emailInput.trim() === "") {
      emptyFields.push("email");
    }

    if (phoneInput.trim() === "") {
      emptyFields.push("phone-number");
    }

    setEmptyFields(emptyFields);

    return emptyFields;
  }

  function updateCurrentStep(number: number) {
    if (currentStep === 4 && number === 1) return;

    if (currentStep === 1) {
      const fields = handleValidation();

      if (fields.length !== 0) {
        return;
      }
    }

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
