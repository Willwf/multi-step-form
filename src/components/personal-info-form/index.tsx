import * as Styles from "./styles";

interface PersonalInfoFormProps {
  className: string;
}

export function PersonalInfoForm(props: PersonalInfoFormProps) {
  const { className } = props;

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
            />
          </fieldset>

          <fieldset>
            <Styles.Label htmlFor="email">Email Address</Styles.Label>
            <Styles.Input
              id="email"
              type="email"
              name="email"
              placeholder="e.g.stephenking@lorem.com"
            />
          </fieldset>

          <fieldset>
            <Styles.Label htmlFor="phone-number">Phone Number</Styles.Label>
            <Styles.Input
              id="phone-number"
              type="text"
              name="phone-number"
              placeholder="e.g. +1 234 567 890"
            />
          </fieldset>
        </Styles.FormInputDiv>
      </Styles.FormSectionDiv>
    </Styles.FormSection>
  );
}
