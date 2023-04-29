import * as Styles from "./styles";

import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import { useState } from "react";

export function SelectYourPlan() {
  const [isPaymentYearly, setIsPaymentYearly] = useState(false);

  function switchToggle() {
    setIsPaymentYearly(!isPaymentYearly);
  }

  console.log(isPaymentYearly);

  return (
    <Styles.Main>
      <Styles.FormSection>
        <Styles.Form>
          <Styles.FormTitleDiv>
            <Styles.FormTitle>Select your plan</Styles.FormTitle>
            <Styles.FormSubtitle>
              You have the option of monthly or yearly billing.
            </Styles.FormSubtitle>
          </Styles.FormTitleDiv>
          <Styles.PlanOptionDiv className="selected">
            <img src={arcade} />
            <Styles.PlanOptionInfoDiv>
              <Styles.PlanOptionTitle>Arcade</Styles.PlanOptionTitle>
              <Styles.PlanOptionPrice>$9/mo</Styles.PlanOptionPrice>
            </Styles.PlanOptionInfoDiv>
          </Styles.PlanOptionDiv>

          <Styles.PlanOptionDiv>
            <img src={advanced} />
            <Styles.PlanOptionInfoDiv>
              <Styles.PlanOptionTitle>Advanced</Styles.PlanOptionTitle>
              <Styles.PlanOptionPrice>$12/mo</Styles.PlanOptionPrice>
            </Styles.PlanOptionInfoDiv>
          </Styles.PlanOptionDiv>

          <Styles.PlanOptionDiv>
            <img src={pro} />
            <Styles.PlanOptionInfoDiv>
              <Styles.PlanOptionTitle>Pro</Styles.PlanOptionTitle>
              <Styles.PlanOptionPrice>$15/mo</Styles.PlanOptionPrice>
            </Styles.PlanOptionInfoDiv>
          </Styles.PlanOptionDiv>

          <Styles.PlanToggleDiv>
            <Styles.PlanTogglePeriod
              className={isPaymentYearly ? "" : "active"}
            >
              Monthly
            </Styles.PlanTogglePeriod>
            <Styles.PeriodToggleDiv onClick={switchToggle}>
              <Styles.SelectorPeriodToggleDiv
                className={isPaymentYearly ? "active" : ""}
              ></Styles.SelectorPeriodToggleDiv>
            </Styles.PeriodToggleDiv>
            <Styles.PlanTogglePeriod
              className={isPaymentYearly ? "active" : ""}
            >
              Yearly
            </Styles.PlanTogglePeriod>
          </Styles.PlanToggleDiv>
        </Styles.Form>
      </Styles.FormSection>
    </Styles.Main>
  );
}
