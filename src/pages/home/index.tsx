import { useState } from "react";
import { Nav } from "../../components/nav";
import { PersonalInfoForm } from "../../components/personal-info-step";
import { SelectYourPlan } from "../../components/select-your-plan-step";
import { PickAddOns } from "../../components/pick-add-ons-step";
import { FinishingUp } from "../../components/finishing-up-step";
import { SkipButtonsElement } from "../../components/skip-buttons-element";

import * as Styles from "./styles";

export function Home() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [nameInput, setNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [phoneInput, setPhoneInput] = useState<string>("");
  const [planOption, setPlanOption] = useState<string>("arcade");
  const [isPaymentYearly, setIsPaymentYearly] = useState<boolean>(false);
  const [addonsSelected, setAddonsSelected] = useState<string[]>([]);

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
          planOption={planOption}
          addonsSelected={addonsSelected}
          setCurrentStep={setCurrentStep}
        />
      </Styles.FormSectionsDiv>

      <SkipButtonsElement
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </Styles.Form>
  );
}
