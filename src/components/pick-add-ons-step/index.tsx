import * as Styles from "./styles";

import checkmark from "../../assets/images/icon-checkmark.svg";
import { Dispatch, SetStateAction } from "react";

interface PickAddOnsProps {
  className: string;
  isPaymentYearly: boolean;
  addonsSelected: string[];
  setAddonsSelected: Dispatch<SetStateAction<string[]>>;
}

export function PickAddOns(props: PickAddOnsProps) {
  const { className, isPaymentYearly, addonsSelected, setAddonsSelected } =
    props;

  const addonsSelectedArray = [...addonsSelected];

  function handleCheckboxClick(addonSelected: string) {
    if (addonsSelectedArray.includes(addonSelected)) {
      const index = addonsSelectedArray.indexOf(addonSelected);
      if (index > -1) {
        addonsSelectedArray.splice(index, 1);
      }
    } else {
      addonsSelectedArray.push(addonSelected);
    }

    setAddonsSelected(addonsSelectedArray);
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
          className={
            addonsSelectedArray.includes("Online service") ? "selected" : ""
          }
          onClick={() => handleCheckboxClick("Online service")}
        >
          <Styles.AddOnOptionTextsDiv>
            <Styles.CheckboxInputDiv
              className={
                addonsSelectedArray.includes("Online service") ? "selected" : ""
              }
            >
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
            {isPaymentYearly ? "+$10/yr" : "+$1/mo"}
          </Styles.AddOnOptionPrice>
        </Styles.AddOnOptionDiv>

        <Styles.AddOnOptionDiv
          className={
            addonsSelectedArray.includes("Larger storage") ? "selected" : ""
          }
          onClick={() => handleCheckboxClick("Larger storage")}
        >
          <Styles.AddOnOptionTextsDiv>
            <Styles.CheckboxInputDiv
              className={
                addonsSelectedArray.includes("Larger storage") ? "selected" : ""
              }
            >
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
            {isPaymentYearly ? "+$20/yr" : "+$2/mo"}
          </Styles.AddOnOptionPrice>
        </Styles.AddOnOptionDiv>

        <Styles.AddOnOptionDiv
          className={
            addonsSelectedArray.includes("Customizable profile")
              ? "selected"
              : ""
          }
          onClick={() => handleCheckboxClick("Customizable profile")}
        >
          <Styles.AddOnOptionTextsDiv>
            <Styles.CheckboxInputDiv
              className={
                addonsSelectedArray.includes("Customizable profile")
                  ? "selected"
                  : ""
              }
            >
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
            {isPaymentYearly ? "+$20/yr" : "+$2/mo"}
          </Styles.AddOnOptionPrice>
        </Styles.AddOnOptionDiv>
      </Styles.FormSectionDiv>
    </Styles.FormSection>
  );
}
