import * as Styles from "./styles";

import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import { Dispatch, SetStateAction } from "react";

interface FinishingUpProps {
  className: string;
  isPaymentYearly: boolean;
  setIsPaymentYearly: Dispatch<SetStateAction<boolean>>;
  planOption: string;
  setPlanOption: Dispatch<SetStateAction<string>>;
}

export function FinishingUp(props: FinishingUpProps) {
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
              <Styles.SelectedPlanTitle>
                Arcade (Monthly)
              </Styles.SelectedPlanTitle>
              <Styles.SelectedPlanPrice>$9/mo</Styles.SelectedPlanPrice>
            </Styles.PlanSelectedDiv>

            <span className="line"></span>

            <Styles.AddonsSelectedDiv>
              <div>
                <Styles.SelectedAddonTitle>
                  Online Service
                </Styles.SelectedAddonTitle>
                <Styles.SelectedAddonPrice>+$1/mo</Styles.SelectedAddonPrice>
              </div>

              <div>
                <Styles.SelectedAddonTitle>
                  Larger Storage
                </Styles.SelectedAddonTitle>
                <Styles.SelectedAddonPrice>+$2/mo</Styles.SelectedAddonPrice>
              </div>
            </Styles.AddonsSelectedDiv>
          </Styles.SelectedOptionsDiv>
        </Styles.PricingSummaryDiv>

        <Styles.TotalPriceDiv>
          <Styles.TotalPriceTitle>Total (per month)</Styles.TotalPriceTitle>
          <Styles.TotalPrice>+$12/mo</Styles.TotalPrice>
        </Styles.TotalPriceDiv>
      </Styles.FormSectionDiv>
    </Styles.FormSection>
  );
}
