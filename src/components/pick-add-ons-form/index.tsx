import * as Styles from "./styles";

import checkmark from "../../assets/images/icon-checkmark.svg";
import { Dispatch, SetStateAction } from "react";

interface PickAddOnsProps {
  className: string;
  isPaymentYearly: boolean;
  setPlanOption: Dispatch<SetStateAction<string>>;
}

export function PickAddOns(props: PickAddOnsProps) {
  const { className, isPaymentYearly, setPlanOption } = props;

  function selectPlan(planOptionSelected: string) {
    setPlanOption(planOptionSelected);
  }

  return (
    <Styles.FormSection className={className}>
      <Styles.FormSectionDiv>
        <Styles.FormTitleDiv>
          <Styles.FormTitle>Pick add-ons</Styles.FormTitle>
          <Styles.FormSubtitle>
            Add-ons help enhance your gaming experience.
          </Styles.FormSubtitle>
        </Styles.FormTitleDiv>

        <Styles.AddOnOptionDiv
          className="selected"
          onClick={() => selectPlan("arcade")}
        >
          <Styles.AddOnOptionTextsDiv>
            <Styles.CheckboxInputDiv className="selected">
              <img src={checkmark} />
            </Styles.CheckboxInputDiv>
            <Styles.AddOnOptionInfoDiv>
              <Styles.AddOnOptionTitle>Online service</Styles.AddOnOptionTitle>
              <Styles.AddOnOptionSubtitle>
                Access to multiplayer games
              </Styles.AddOnOptionSubtitle>
            </Styles.AddOnOptionInfoDiv>
          </Styles.AddOnOptionTextsDiv>
          <Styles.AddOnOptionPrice>
            {isPaymentYearly ? "$10/yr" : "+$1/mo"}
          </Styles.AddOnOptionPrice>
        </Styles.AddOnOptionDiv>

        <Styles.AddOnOptionDiv onClick={() => selectPlan("advanced")}>
          <Styles.AddOnOptionTextsDiv>
            <Styles.CheckboxInputDiv>
              <img src={checkmark} />
            </Styles.CheckboxInputDiv>
            <Styles.AddOnOptionInfoDiv>
              <Styles.AddOnOptionTitle>Larger storage</Styles.AddOnOptionTitle>
              <Styles.AddOnOptionSubtitle>
                Extra 1TB of cloud save
              </Styles.AddOnOptionSubtitle>
            </Styles.AddOnOptionInfoDiv>
          </Styles.AddOnOptionTextsDiv>
          <Styles.AddOnOptionPrice>
            {isPaymentYearly ? "$20/yr" : "+$2/mo"}
          </Styles.AddOnOptionPrice>
        </Styles.AddOnOptionDiv>

        <Styles.AddOnOptionDiv onClick={() => selectPlan("pro")}>
          <Styles.AddOnOptionTextsDiv>
            <Styles.CheckboxInputDiv>
              <img src={checkmark} />
            </Styles.CheckboxInputDiv>
            <Styles.AddOnOptionInfoDiv>
              <Styles.AddOnOptionTitle>
                Customizable profile
              </Styles.AddOnOptionTitle>
              <Styles.AddOnOptionSubtitle>
                Custom theme on your profile
              </Styles.AddOnOptionSubtitle>
            </Styles.AddOnOptionInfoDiv>
          </Styles.AddOnOptionTextsDiv>
          <Styles.AddOnOptionPrice>
            {isPaymentYearly ? "$20/yr" : "+$2/mo"}
          </Styles.AddOnOptionPrice>
        </Styles.AddOnOptionDiv>
      </Styles.FormSectionDiv>
    </Styles.FormSection>
  );
}
