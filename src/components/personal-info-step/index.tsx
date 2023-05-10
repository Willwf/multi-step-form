import { ChangeEvent, Dispatch, SetStateAction } from "react";
import * as Styles from "./styles";

interface PersonalInfoFormProps {
  className: string;
  nameInput: string;
  emailInput: string;
  phoneInput: string;
  setNameInput: Dispatch<SetStateAction<string>>;
  setEmailInput: Dispatch<SetStateAction<string>>;
  setPhoneInput: Dispatch<SetStateAction<string>>;
}

export function PersonalInfoForm(props: PersonalInfoFormProps) {
  const {
    className,
    nameInput,
    emailInput,
    phoneInput,
    setNameInput,
    setEmailInput,
    setPhoneInput,
  } = props;

  function handleNameInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNameInput(event.target.value);
  }

  function handleEmailInputChange(event: ChangeEvent<HTMLInputElement>) {
    setEmailInput(event.target.value);
  }

  function handlePhoneInputChange(event: ChangeEvent<HTMLInputElement>) {
    setPhoneInput(event.target.value);
  }

  return (
    <Styles.FormSection className={className}>
      <Styles.FormSectionDiv>
        <Styles.FormTitleDiv>
          <Styles.FormTitle>Personal info</Styles.FormTitle>
          <Styles.FormSubtitle>
            Please provide your name, email address, and phone number.
          </Styles.FormSubtitle>
        </Styles.FormTitleDiv>

        <Styles.FormInputDiv>
          <fieldset>
            <Styles.Label htmlFor="name">Name</Styles.Label>
            <Styles.Input
              id="name"
              type="text"
              name="name"
              placeholder="e.g. Stephen King"
              value={nameInput}
              onChange={handleNameInputChange}
            />
          </fieldset>

          <fieldset>
            <Styles.Label htmlFor="email">Email Address</Styles.Label>
            <Styles.Input
              id="email"
              type="email"
              name="email"
              placeholder="e.g.stephenking@lorem.com"
              value={emailInput}
              onChange={handleEmailInputChange}
            />
          </fieldset>

          <fieldset>
            <Styles.Label htmlFor="phone-number">Phone Number</Styles.Label>
            <Styles.Input
              id="phone-number"
              type="text"
              name="phone-number"
              placeholder="e.g. +1 234 567 890"
              value={phoneInput}
              onChange={handlePhoneInputChange}
            />
          </fieldset>
        </Styles.FormInputDiv>
      </Styles.FormSectionDiv>
    </Styles.FormSection>
  );
}
