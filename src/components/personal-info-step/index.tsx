import { ChangeEvent, Dispatch, SetStateAction } from "react";
import * as Styles from "./styles";

interface PersonalInfoFormProps {
  className: string;
  nameInput: string;
  emailInput: string;
  phoneInput: string;
  emptyFields: string[];
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
    emptyFields,
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
            <div>
              <Styles.Label htmlFor="name">Name</Styles.Label>
              <Styles.errorLabel
                htmlFor="name"
                className={`${
                  emptyFields.includes("name") ? "errorField" : ""
                }`}
              >
                This field is required
              </Styles.errorLabel>
            </div>
            <Styles.Input
              id="name"
              type="text"
              name="name"
              placeholder="e.g. Stephen King"
              value={nameInput}
              onChange={handleNameInputChange}
              className={`${emptyFields.includes("name") ? "errorField" : ""}`}
            />
          </fieldset>

          <fieldset>
            <div>
              <Styles.Label htmlFor="email">Email Address</Styles.Label>
              <Styles.errorLabel
                htmlFor="email"
                className={`${
                  emptyFields.includes("email") ? "errorField" : ""
                }`}
              >
                This field is required
              </Styles.errorLabel>
            </div>
            <Styles.Input
              id="email"
              type="email"
              name="email"
              placeholder="e.g.stephenking@lorem.com"
              value={emailInput}
              onChange={handleEmailInputChange}
              className={`${emptyFields.includes("email") ? "errorField" : ""}`}
            />
          </fieldset>

          <fieldset>
            <div>
              <Styles.Label htmlFor="phone-number">Phone Number</Styles.Label>
              <Styles.errorLabel
                htmlFor="phone-number"
                className={`${
                  emptyFields.includes("phone-number") ? "errorField" : ""
                }`}
              >
                This field is required
              </Styles.errorLabel>
            </div>
            <Styles.Input
              id="phone-number"
              type="text"
              name="phone-number"
              placeholder="e.g. +1 234 567 890"
              value={phoneInput}
              onChange={handlePhoneInputChange}
              className={`${
                emptyFields.includes("phone-number") ? "errorField" : ""
              }`}
            />
          </fieldset>
        </Styles.FormInputDiv>
      </Styles.FormSectionDiv>
    </Styles.FormSection>
  );
}
