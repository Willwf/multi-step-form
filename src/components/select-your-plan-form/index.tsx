import * as Styles from "./styles";

import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import { Dispatch, SetStateAction } from "react";

interface SelectYourPlanProps {
  className: string;
  isPaymentYearly: boolean;
  setIsPaymentYearly: Dispatch<SetStateAction<boolean>>;
  planOption: string;
  setPlanOption: Dispatch<SetStateAction<string>>;
}

export function SelectYourPlan(props: SelectYourPlanProps) {
  const {
    className,
    isPaymentYearly,
    setIsPaymentYearly,
    planOption,
    setPlanOption,
  } = props;

  function switchToggle() {
    setIsPaymentYearly(!isPaymentYearly);
  }

  function selectPlan(planOptionSelected: string) {
    setPlanOption(planOptionSelected);
  }

  console.log(planOption);

  return (
    <Styles.FormSection className={className}>
      <Styles.FormSectionDiv>
        <Styles.FormTitleDiv>
          <Styles.FormTitle>Select your plan</Styles.FormTitle>
          <Styles.FormSubtitle>
            You have the option of monthly or yearly billing.
          </Styles.FormSubtitle>
        </Styles.FormTitleDiv>

        <Styles.PlanOptionDiv
          data-option={"arcade"}
          className={planOption === "arcade" ? "selected" : ""}
          onClick={() => selectPlan("arcade")}
        >
          <img src={arcade} />
          <Styles.PlanOptionInfoDiv>
            <Styles.PlanOptionTitle>Arcade</Styles.PlanOptionTitle>
            <Styles.PlanOptionPrice>
              {isPaymentYearly ? "$90/yr" : "$9/mo"}
            </Styles.PlanOptionPrice>
            {isPaymentYearly ? (
              <Styles.PlanOptionGift>2 months free</Styles.PlanOptionGift>
            ) : (
              ""
            )}
          </Styles.PlanOptionInfoDiv>
        </Styles.PlanOptionDiv>

        <Styles.PlanOptionDiv
          data-option={"advanced"}
          className={planOption === "advanced" ? "selected" : ""}
          onClick={() => selectPlan("advanced")}
        >
          <img src={advanced} />
          <Styles.PlanOptionInfoDiv>
            <Styles.PlanOptionTitle>Advanced</Styles.PlanOptionTitle>
            <Styles.PlanOptionPrice>
              {isPaymentYearly ? "$120/yr" : "$12/mo"}
            </Styles.PlanOptionPrice>
            {isPaymentYearly ? (
              <Styles.PlanOptionGift>2 months free</Styles.PlanOptionGift>
            ) : (
              ""
            )}
          </Styles.PlanOptionInfoDiv>
        </Styles.PlanOptionDiv>

        <Styles.PlanOptionDiv
          data-option={"pro"}
          className={planOption === "pro" ? "selected" : ""}
          onClick={() => selectPlan("pro")}
        >
          <img src={pro} />
          <Styles.PlanOptionInfoDiv>
            <Styles.PlanOptionTitle>Pro</Styles.PlanOptionTitle>
            <Styles.PlanOptionPrice>
              {isPaymentYearly ? "$150/yr" : "$15/mo"}
            </Styles.PlanOptionPrice>
            {isPaymentYearly ? (
              <Styles.PlanOptionGift>2 months free</Styles.PlanOptionGift>
            ) : (
              ""
            )}
          </Styles.PlanOptionInfoDiv>
        </Styles.PlanOptionDiv>

        <Styles.PlanToggleDiv>
          <Styles.PlanTogglePeriod className={isPaymentYearly ? "" : "active"}>
            Monthly
          </Styles.PlanTogglePeriod>
          <Styles.PeriodToggleDiv onClick={switchToggle}>
            <Styles.SelectorPeriodToggleDiv
              className={isPaymentYearly ? "active" : ""}
            ></Styles.SelectorPeriodToggleDiv>
          </Styles.PeriodToggleDiv>
          <Styles.PlanTogglePeriod className={isPaymentYearly ? "active" : ""}>
            Yearly
          </Styles.PlanTogglePeriod>
        </Styles.PlanToggleDiv>
      </Styles.FormSectionDiv>
    </Styles.FormSection>
  );
}
