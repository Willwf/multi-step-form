import { useState } from "react";
import { Nav } from "../../components/nav";
import { PersonalInfoForm } from "../../components/personal-info-step";
import { SelectYourPlan } from "../../components/select-your-plan-step";
import { PickAddOns } from "../../components/pick-add-ons-step";

import * as Styles from "./styles";
import { FinishingUp } from "../../components/finishing-up-step";

export function Home() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [nameInput, setNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [phoneInput, setPhoneInput] = useState<string>("");
  const [planOption, setPlanOption] = useState<string>("arcade");
  const [isPaymentYearly, setIsPaymentYearly] = useState<boolean>(false);
  const [addonsSelected, setAddonsSelected] = useState<string[]>([]);

  function updateCurrentStep(number: number) {
    if (currentStep === 4 && number === 1) return;

    setCurrentStep(currentStep + number);
  }

  return (
    <Styles.Form key={currentStep}>
      <Nav currentStep={currentStep} />
      <Styles.FormSectionsDiv>
        <PersonalInfoForm
          className={`step ${currentStep === 1 ? "active" : ""}`}
          nameInput={nameInput}
          emailInput={emailInput}
          phoneInput={phoneInput}
          setNameInput={setNameInput}
          setEmailInput={setEmailInput}
          setPhoneInput={setPhoneInput}
        />
        <SelectYourPlan
          className={`step ${currentStep === 2 ? "active" : ""}`}
          isPaymentYearly={isPaymentYearly}
          setIsPaymentYearly={setIsPaymentYearly}
          planOption={planOption}
          setPlanOption={setPlanOption}
        />
        <PickAddOns
          className={`step ${currentStep === 3 ? "active" : ""}`}
          isPaymentYearly={isPaymentYearly}
          addonsSelected={addonsSelected}
          setAddonsSelected={setAddonsSelected}
        />
        <FinishingUp
          className={`step ${currentStep === 4 ? "active" : ""}`}
          isPaymentYearly={isPaymentYearly}
          setIsPaymentYearly={setIsPaymentYearly}
          planOption={planOption}
          setPlanOption={setPlanOption}
        />
      </Styles.FormSectionsDiv>
      <Styles.NextButtonDiv
        className={currentStep > 1 ? "backButtonActive" : ""}
      >
        <Styles.BackButton
          className={currentStep > 1 ? "active" : ""}
          onClick={(event) => {
            event.preventDefault();
            updateCurrentStep(-1);
          }}
        >
          Go Back
        </Styles.BackButton>
        <Styles.NextButton
          onClick={(event) => {
            event.preventDefault();
            updateCurrentStep(1);
          }}
        >
          Next Step
        </Styles.NextButton>
      </Styles.NextButtonDiv>
    </Styles.Form>
  );
}
