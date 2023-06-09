import { FormEvent, useState } from "react";
import { Nav } from "../../components/nav";
import { PersonalInfoForm } from "../../components/personal-info-step";
import { SelectYourPlan } from "../../components/select-your-plan-step";
import { PickAddOns } from "../../components/pick-add-ons-step";
import { FinishingUp } from "../../components/finishing-up-step";
import { SkipButtonsElement } from "../../components/skip-buttons-element";
import { SubscriptionConfirmedPage } from "../../components/subscription-confirmed-page";

import * as Styles from "./styles";

export function Home() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [nameInput, setNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [phoneInput, setPhoneInput] = useState<string>("");
  const [planOption, setPlanOption] = useState<string>("arcade");
  const [isPaymentYearly, setIsPaymentYearly] = useState<boolean>(false);
  const [addonsSelected, setAddonsSelected] = useState<string[]>([]);
  const [emptyFields, setEmptyFields] = useState<string[]>([]);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitted(true);
  }

  return (
    <Styles.Form onSubmit={handleSubmit} key={currentStep}>
      <Nav currentStep={currentStep} />

      <div className="formContent">
        {isSubmitted ? (
          <Styles.FormSectionsDiv>
            <SubscriptionConfirmedPage />
          </Styles.FormSectionsDiv>
        ) : (
          <Styles.FormSectionsDiv>
            <PersonalInfoForm
              className={`step ${currentStep === 1 ? "active" : ""}`}
              nameInput={nameInput}
              emailInput={emailInput}
              phoneInput={phoneInput}
              emptyFields={emptyFields}
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
        )}

        <SkipButtonsElement
          isSubmitted={isSubmitted}
          nameInput={nameInput}
          emailInput={emailInput}
          phoneInput={phoneInput}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setEmptyFields={setEmptyFields}
        />
      </div>
    </Styles.Form>
  );
}
