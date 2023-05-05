import { useState } from "react";
import { Nav } from "../../components/nav";
import { PersonalInfoForm } from "../../components/personal-info-form";
import { SelectYourPlan } from "../../components/select-your-plan-form";
import * as Styles from "./styles";

export function Home() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [planOption, setPlanOption] = useState<string>("arcade");
  const [isPaymentYearly, setIsPaymentYearly] = useState<boolean>(false);

  function updateCurrentStep(number: number) {
    // if (currentStep === 4) return;
    setCurrentStep(currentStep + number);
  }

  return (
    <Styles.Form key={currentStep}>
      <Nav currentStep={currentStep} />
      <Styles.FormSectionsDiv>
        <PersonalInfoForm
          className={`step ${currentStep === 1 ? "active" : ""}`}
        />
        <SelectYourPlan
          className={`step ${currentStep === 2 ? "active" : ""}`}
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
