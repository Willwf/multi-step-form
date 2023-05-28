import * as Styles from "./styles";

import { Dispatch, SetStateAction } from "react";

interface FinishingUpProps {
  className: string;
  isPaymentYearly: boolean;
  planOption: string;
  addonsSelected: string[];
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

interface Prices {
  [key: string]: number;
}

const addonsMonthlyPrice: Prices = {
  "Online service": 1,
  "Larger storage": 2,
  "Customizable profile": 2,
};

const addonsYearlyPrice: Prices = {
  "Online service": 10,
  "Larger storage": 20,
  "Customizable profile": 20,
};

const plansMonthlyPrice: Prices = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};

const plansYearlyPrice: Prices = {
  arcade: 90,
  advanced: 120,
  pro: 150,
};

export function FinishingUp(props: FinishingUpProps) {
  const {
    className,
    isPaymentYearly,
    planOption,
    addonsSelected,
    setCurrentStep,
  } = props;

  function handleChangeButton() {
    setCurrentStep(2);
  }

  function getTotalPrice(isPaymentYearly: boolean) {
    if (isPaymentYearly) {
      const planTotalPrice = plansYearlyPrice[planOption];

      const initialValue = 0;
      const addonsTotalPrice = addonsSelected.reduce(
        (acc, value) => acc + addonsYearlyPrice[value],
        initialValue
      );

      return planTotalPrice + addonsTotalPrice;
    }

    const planTotalPrice = plansMonthlyPrice[planOption];

    const initialValue = 0;
    const addonsTotalPrice = addonsSelected.reduce(
      (acc, value) => acc + addonsMonthlyPrice[value],
      initialValue
    );

    return planTotalPrice + addonsTotalPrice;
  }

  return (
    <Styles.FormSection className={className}>
      <Styles.FormSectionDiv>
        <Styles.FormTitleDiv>
          <Styles.FormTitle>Finishing up</Styles.FormTitle>
          <Styles.FormSubtitle>
            Double-check everything looks OK before confirming.
          </Styles.FormSubtitle>
        </Styles.FormTitleDiv>

        <Styles.PricingSummaryDiv>
          <Styles.SelectedOptionsDiv>
            <Styles.PlanSelectedDiv>
              <div>
                <Styles.SelectedPlanTitle>
                  {isPaymentYearly
                    ? `${
                        planOption.charAt(0).toUpperCase() + planOption.slice(1)
                      } (Yearly)`
                    : `${
                        planOption.charAt(0).toUpperCase() + planOption.slice(1)
                      } (Monthly)`}
                </Styles.SelectedPlanTitle>
                <Styles.ChangePlanButton onClick={handleChangeButton}>
                  Change
                </Styles.ChangePlanButton>
              </div>
              <Styles.SelectedPlanPrice>
                {isPaymentYearly
                  ? `$${plansYearlyPrice[planOption]}/yr`
                  : `$${plansMonthlyPrice[planOption]}/mo`}
              </Styles.SelectedPlanPrice>
            </Styles.PlanSelectedDiv>

            <span className="line"></span>

            <Styles.AddonsSelectedDiv>
              {addonsSelected.map((addon, index) => {
                return (
                  <div key={index}>
                    <Styles.SelectedAddonTitle>
                      {addon}
                    </Styles.SelectedAddonTitle>
                    <Styles.SelectedAddonPrice>
                      {isPaymentYearly
                        ? `+$${addonsYearlyPrice[addon]}/yr`
                        : `+$${addonsMonthlyPrice[addon]}/mo`}
                    </Styles.SelectedAddonPrice>
                  </div>
                );
              })}
            </Styles.AddonsSelectedDiv>
          </Styles.SelectedOptionsDiv>
        </Styles.PricingSummaryDiv>

        <Styles.TotalPriceDiv>
          <Styles.TotalPriceTitle>
            {isPaymentYearly ? "Total (per year)" : "Total (per month)"}
          </Styles.TotalPriceTitle>
          <Styles.TotalPrice>
            {isPaymentYearly
              ? `$${getTotalPrice(isPaymentYearly)}/yr`
              : `$${getTotalPrice(isPaymentYearly)}/mo`}
          </Styles.TotalPrice>
        </Styles.TotalPriceDiv>
      </Styles.FormSectionDiv>
    </Styles.FormSection>
  );
}
